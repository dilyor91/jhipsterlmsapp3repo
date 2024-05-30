package uz.momoit.lms_canvas.service.impl;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uz.momoit.lms_canvas.domain.Faculty;
import uz.momoit.lms_canvas.repository.FacultyRepository;
import uz.momoit.lms_canvas.service.FacultyService;
import uz.momoit.lms_canvas.service.dto.FacultyDTO;
import uz.momoit.lms_canvas.service.mapper.FacultyMapper;

/**
 * Service Implementation for managing {@link uz.momoit.lms_canvas.domain.Faculty}.
 */
@Service
@Transactional
public class FacultyServiceImpl implements FacultyService {

    private final Logger log = LoggerFactory.getLogger(FacultyServiceImpl.class);

    private final FacultyRepository facultyRepository;

    private final FacultyMapper facultyMapper;

    public FacultyServiceImpl(FacultyRepository facultyRepository, FacultyMapper facultyMapper) {
        this.facultyRepository = facultyRepository;
        this.facultyMapper = facultyMapper;
    }

    @Override
    public FacultyDTO save(FacultyDTO facultyDTO) {
        log.debug("Request to save Faculty : {}", facultyDTO);
        Faculty faculty = facultyMapper.toEntity(facultyDTO);
        faculty = facultyRepository.save(faculty);
        return facultyMapper.toDto(faculty);
    }

    @Override
    @Transactional(readOnly = true)
    public List<FacultyDTO> findAll() {
        log.debug("Request to get all Faculties");
        return facultyRepository.findAll().stream().map(facultyMapper::toDto).collect(Collectors.toCollection(LinkedList::new));
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<FacultyDTO> findOne(Long id) {
        log.debug("Request to get Faculty : {}", id);
        return facultyRepository.findById(id).map(facultyMapper::toDto);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Faculty : {}", id);
        facultyRepository.deleteById(id);
    }
}