package uz.momoit.lms_canvas.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static uz.momoit.lms_canvas.domain.SpecialityAsserts.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityManager;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import uz.momoit.lms_canvas.IntegrationTest;
import uz.momoit.lms_canvas.domain.Speciality;
import uz.momoit.lms_canvas.repository.SpecialityRepository;
import uz.momoit.lms_canvas.service.dto.SpecialityDTO;
import uz.momoit.lms_canvas.service.mapper.SpecialityMapper;

/**
 * Integration tests for the {@link SpecialityResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class SpecialityResourceIT {

    private static final String ENTITY_API_URL = "/api/specialities";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private SpecialityRepository specialityRepository;

    @Autowired
    private SpecialityMapper specialityMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restSpecialityMockMvc;

    private Speciality speciality;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Speciality createEntity(EntityManager em) {
        Speciality speciality = new Speciality();
        return speciality;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Speciality createUpdatedEntity(EntityManager em) {
        Speciality speciality = new Speciality();
        return speciality;
    }

    @BeforeEach
    public void initTest() {
        speciality = createEntity(em);
    }

    @Test
    @Transactional
    void createSpeciality() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Speciality
        SpecialityDTO specialityDTO = specialityMapper.toDto(speciality);
        var returnedSpecialityDTO = om.readValue(
            restSpecialityMockMvc
                .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(specialityDTO)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            SpecialityDTO.class
        );

        // Validate the Speciality in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        var returnedSpeciality = specialityMapper.toEntity(returnedSpecialityDTO);
        assertSpecialityUpdatableFieldsEquals(returnedSpeciality, getPersistedSpeciality(returnedSpeciality));
    }

    @Test
    @Transactional
    void createSpecialityWithExistingId() throws Exception {
        // Create the Speciality with an existing ID
        speciality.setId(1L);
        SpecialityDTO specialityDTO = specialityMapper.toDto(speciality);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restSpecialityMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(specialityDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Speciality in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllSpecialities() throws Exception {
        // Initialize the database
        specialityRepository.saveAndFlush(speciality);

        // Get all the specialityList
        restSpecialityMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(speciality.getId().intValue())));
    }

    @Test
    @Transactional
    void getSpeciality() throws Exception {
        // Initialize the database
        specialityRepository.saveAndFlush(speciality);

        // Get the speciality
        restSpecialityMockMvc
            .perform(get(ENTITY_API_URL_ID, speciality.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(speciality.getId().intValue()));
    }

    @Test
    @Transactional
    void getNonExistingSpeciality() throws Exception {
        // Get the speciality
        restSpecialityMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void deleteSpeciality() throws Exception {
        // Initialize the database
        specialityRepository.saveAndFlush(speciality);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the speciality
        restSpecialityMockMvc
            .perform(delete(ENTITY_API_URL_ID, speciality.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return specialityRepository.count();
    }

    protected void assertIncrementedRepositoryCount(long countBefore) {
        assertThat(countBefore + 1).isEqualTo(getRepositoryCount());
    }

    protected void assertDecrementedRepositoryCount(long countBefore) {
        assertThat(countBefore - 1).isEqualTo(getRepositoryCount());
    }

    protected void assertSameRepositoryCount(long countBefore) {
        assertThat(countBefore).isEqualTo(getRepositoryCount());
    }

    protected Speciality getPersistedSpeciality(Speciality speciality) {
        return specialityRepository.findById(speciality.getId()).orElseThrow();
    }

    protected void assertPersistedSpecialityToMatchAllProperties(Speciality expectedSpeciality) {
        assertSpecialityAllPropertiesEquals(expectedSpeciality, getPersistedSpeciality(expectedSpeciality));
    }

    protected void assertPersistedSpecialityToMatchUpdatableProperties(Speciality expectedSpeciality) {
        assertSpecialityAllUpdatablePropertiesEquals(expectedSpeciality, getPersistedSpeciality(expectedSpeciality));
    }
}
