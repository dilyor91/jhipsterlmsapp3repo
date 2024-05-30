package uz.momoit.lms_canvas.service;

import java.util.List;
import java.util.Optional;
import uz.momoit.lms_canvas.service.dto.SpecialityDTO;

/**
 * Service Interface for managing {@link uz.momoit.lms_canvas.domain.Speciality}.
 */
public interface SpecialityService {
    /**
     * Save a speciality.
     *
     * @param specialityDTO the entity to save.
     * @return the persisted entity.
     */
    SpecialityDTO save(SpecialityDTO specialityDTO);

    /**
     * Updates a speciality.
     *
     * @param specialityDTO the entity to update.
     * @return the persisted entity.
     */
    SpecialityDTO update(SpecialityDTO specialityDTO);

    /**
     * Partially updates a speciality.
     *
     * @param specialityDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<SpecialityDTO> partialUpdate(SpecialityDTO specialityDTO);

    /**
     * Get all the specialities.
     *
     * @return the list of entities.
     */
    List<SpecialityDTO> findAll();

    /**
     * Get the "id" speciality.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<SpecialityDTO> findOne(Long id);

    /**
     * Delete the "id" speciality.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
