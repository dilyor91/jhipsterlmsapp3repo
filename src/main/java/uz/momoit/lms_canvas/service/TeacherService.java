package uz.momoit.lms_canvas.service;

import java.util.List;
import java.util.Optional;
import uz.momoit.lms_canvas.service.dto.TeacherDTO;

/**
 * Service Interface for managing {@link uz.momoit.lms_canvas.domain.Teacher}.
 */
public interface TeacherService {
    /**
     * Save a teacher.
     *
     * @param teacherDTO the entity to save.
     * @return the persisted entity.
     */
    TeacherDTO save(TeacherDTO teacherDTO);

    /**
     * Updates a teacher.
     *
     * @param teacherDTO the entity to update.
     * @return the persisted entity.
     */
    TeacherDTO update(TeacherDTO teacherDTO);

    /**
     * Partially updates a teacher.
     *
     * @param teacherDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<TeacherDTO> partialUpdate(TeacherDTO teacherDTO);

    /**
     * Get all the teachers.
     *
     * @return the list of entities.
     */
    List<TeacherDTO> findAll();

    /**
     * Get the "id" teacher.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<TeacherDTO> findOne(Long id);

    /**
     * Delete the "id" teacher.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
