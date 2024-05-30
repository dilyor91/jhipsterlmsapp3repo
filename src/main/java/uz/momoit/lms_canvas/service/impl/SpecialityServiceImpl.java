package uz.momoit.lms_canvas.service.impl;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uz.momoit.lms_canvas.domain.Speciality;
import uz.momoit.lms_canvas.repository.SpecialityRepository;
import uz.momoit.lms_canvas.service.SpecialityService;
import uz.momoit.lms_canvas.service.dto.SpecialityDTO;
import uz.momoit.lms_canvas.service.mapper.SpecialityMapper;

/**
 * Service Implementation for managing {@link uz.momoit.lms_canvas.domain.Speciality}.
 */
@Service
@Transactional
public class SpecialityServiceImpl implements SpecialityService {

    private final Logger log = LoggerFactory.getLogger(SpecialityServiceImpl.class);

    private final SpecialityRepository specialityRepository;

    private final SpecialityMapper specialityMapper;

    public SpecialityServiceImpl(SpecialityRepository specialityRepository, SpecialityMapper specialityMapper) {
        this.specialityRepository = specialityRepository;
        this.specialityMapper = specialityMapper;
    }

    @Override
    public SpecialityDTO save(SpecialityDTO specialityDTO) {
        log.debug("Request to save Speciality : {}", specialityDTO);
        Speciality speciality = specialityMapper.toEntity(specialityDTO);
        speciality = specialityRepository.save(speciality);
        return specialityMapper.toDto(speciality);
    }

    @Override
    @Transactional(readOnly = true)
    public List<SpecialityDTO> findAll() {
        log.debug("Request to get all Specialities");
        return specialityRepository.findAll().stream().map(specialityMapper::toDto).collect(Collectors.toCollection(LinkedList::new));
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<SpecialityDTO> findOne(Long id) {
        log.debug("Request to get Speciality : {}", id);
        return specialityRepository.findById(id).map(specialityMapper::toDto);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Speciality : {}", id);
        specialityRepository.deleteById(id);
    }
}
