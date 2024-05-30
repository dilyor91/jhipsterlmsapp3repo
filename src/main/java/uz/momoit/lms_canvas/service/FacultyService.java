package uz.momoit.lms_canvas.service;

import java.util.List;
import java.util.Optional;
import uz.momoit.lms_canvas.service.dto.FacultyDTO;

/**
 * Service Interface for managing {@link uz.momoit.lms_canvas.domain.Faculty}.
 */
public interface FacultyService {
    /**
     * Save a faculty.
     *
     * @param facultyDTO the entity to save.
     * @return the persisted entity.
     */
    FacultyDTO save(FacultyDTO facultyDTO);

    /**
     * Updates a faculty.
     *
     * @param facultyDTO the entity to update.
     * @return the persisted entity.
     */
    FacultyDTO update(FacultyDTO facultyDTO);

    /**
     * Partially updates a faculty.
     *
     * @param facultyDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<FacultyDTO> partialUpdate(FacultyDTO facultyDTO);

    /**
     * Get all the faculties.
     *
     * @return the list of entities.
     */
    List<FacultyDTO> findAll();

    /**
     * Get the "id" faculty.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<FacultyDTO> findOne(Long id);

    /**
     * Delete the "id" faculty.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
