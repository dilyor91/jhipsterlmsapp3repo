package uz.momoit.lms_canvas.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;
import uz.momoit.lms_canvas.repository.SpecialityRepository;
import uz.momoit.lms_canvas.service.SpecialityService;
import uz.momoit.lms_canvas.service.dto.SpecialityDTO;
import uz.momoit.lms_canvas.web.rest.errors.BadRequestAlertException;

/**
 * REST controller for managing {@link uz.momoit.lms_canvas.domain.Speciality}.
 */
@RestController
@RequestMapping("/api/specialities")
public class SpecialityResource {

    private final Logger log = LoggerFactory.getLogger(SpecialityResource.class);

    private static final String ENTITY_NAME = "speciality";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SpecialityService specialityService;

    private final SpecialityRepository specialityRepository;

    public SpecialityResource(SpecialityService specialityService, SpecialityRepository specialityRepository) {
        this.specialityService = specialityService;
        this.specialityRepository = specialityRepository;
    }

    /**
     * {@code POST  /specialities} : Create a new speciality.
     *
     * @param specialityDTO the specialityDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new specialityDTO, or with status {@code 400 (Bad Request)} if the speciality has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<SpecialityDTO> createSpeciality(@RequestBody SpecialityDTO specialityDTO) throws URISyntaxException {
        log.debug("REST request to save Speciality : {}", specialityDTO);
        if (specialityDTO.getId() != null) {
            throw new BadRequestAlertException("A new speciality cannot already have an ID", ENTITY_NAME, "idexists");
        }
        specialityDTO = specialityService.save(specialityDTO);
        return ResponseEntity.created(new URI("/api/specialities/" + specialityDTO.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, specialityDTO.getId().toString()))
            .body(specialityDTO);
    }

    /**
     * {@code GET  /specialities} : get all the specialities.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of specialities in body.
     */
    @GetMapping("")
    public List<SpecialityDTO> getAllSpecialities() {
        log.debug("REST request to get all Specialities");
        return specialityService.findAll();
    }

    /**
     * {@code GET  /specialities/:id} : get the "id" speciality.
     *
     * @param id the id of the specialityDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the specialityDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<SpecialityDTO> getSpeciality(@PathVariable("id") Long id) {
        log.debug("REST request to get Speciality : {}", id);
        Optional<SpecialityDTO> specialityDTO = specialityService.findOne(id);
        return ResponseUtil.wrapOrNotFound(specialityDTO);
    }

    /**
     * {@code DELETE  /specialities/:id} : delete the "id" speciality.
     *
     * @param id the id of the specialityDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSpeciality(@PathVariable("id") Long id) {
        log.debug("REST request to delete Speciality : {}", id);
        specialityService.delete(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
