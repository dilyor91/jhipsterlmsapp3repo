package uz.momoit.lms_canvas.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static uz.momoit.lms_canvas.domain.FacultyAsserts.*;

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
import uz.momoit.lms_canvas.domain.Faculty;
import uz.momoit.lms_canvas.repository.FacultyRepository;
import uz.momoit.lms_canvas.service.dto.FacultyDTO;
import uz.momoit.lms_canvas.service.mapper.FacultyMapper;

/**
 * Integration tests for the {@link FacultyResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class FacultyResourceIT {

    private static final String ENTITY_API_URL = "/api/faculties";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private FacultyRepository facultyRepository;

    @Autowired
    private FacultyMapper facultyMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restFacultyMockMvc;

    private Faculty faculty;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Faculty createEntity(EntityManager em) {
        Faculty faculty = new Faculty();
        return faculty;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Faculty createUpdatedEntity(EntityManager em) {
        Faculty faculty = new Faculty();
        return faculty;
    }

    @BeforeEach
    public void initTest() {
        faculty = createEntity(em);
    }

    @Test
    @Transactional
    void createFaculty() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Faculty
        FacultyDTO facultyDTO = facultyMapper.toDto(faculty);
        var returnedFacultyDTO = om.readValue(
            restFacultyMockMvc
                .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(facultyDTO)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            FacultyDTO.class
        );

        // Validate the Faculty in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        var returnedFaculty = facultyMapper.toEntity(returnedFacultyDTO);
        assertFacultyUpdatableFieldsEquals(returnedFaculty, getPersistedFaculty(returnedFaculty));
    }

    @Test
    @Transactional
    void createFacultyWithExistingId() throws Exception {
        // Create the Faculty with an existing ID
        faculty.setId(1L);
        FacultyDTO facultyDTO = facultyMapper.toDto(faculty);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restFacultyMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(facultyDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Faculty in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllFaculties() throws Exception {
        // Initialize the database
        facultyRepository.saveAndFlush(faculty);

        // Get all the facultyList
        restFacultyMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(faculty.getId().intValue())));
    }

    @Test
    @Transactional
    void getFaculty() throws Exception {
        // Initialize the database
        facultyRepository.saveAndFlush(faculty);

        // Get the faculty
        restFacultyMockMvc
            .perform(get(ENTITY_API_URL_ID, faculty.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(faculty.getId().intValue()));
    }

    @Test
    @Transactional
    void getNonExistingFaculty() throws Exception {
        // Get the faculty
        restFacultyMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void deleteFaculty() throws Exception {
        // Initialize the database
        facultyRepository.saveAndFlush(faculty);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the faculty
        restFacultyMockMvc
            .perform(delete(ENTITY_API_URL_ID, faculty.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return facultyRepository.count();
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

    protected Faculty getPersistedFaculty(Faculty faculty) {
        return facultyRepository.findById(faculty.getId()).orElseThrow();
    }

    protected void assertPersistedFacultyToMatchAllProperties(Faculty expectedFaculty) {
        assertFacultyAllPropertiesEquals(expectedFaculty, getPersistedFaculty(expectedFaculty));
    }

    protected void assertPersistedFacultyToMatchUpdatableProperties(Faculty expectedFaculty) {
        assertFacultyAllUpdatablePropertiesEquals(expectedFaculty, getPersistedFaculty(expectedFaculty));
    }
}
