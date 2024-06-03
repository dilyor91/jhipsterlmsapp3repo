package uz.momoit.lms_canvas.service.mapper;

import org.mapstruct.*;
import uz.momoit.lms_canvas.domain.Teacher;
import uz.momoit.lms_canvas.domain.User;
import uz.momoit.lms_canvas.service.dto.TeacherDTO;
import uz.momoit.lms_canvas.service.dto.UserDTO;

/**
 * Mapper for the entity {@link Teacher} and its DTO {@link TeacherDTO}.
 */
@Mapper(componentModel = "spring")
public interface TeacherMapper extends EntityMapper<TeacherDTO, Teacher> {
    @Mapping(target = "user", source = "user", qualifiedByName = "userId")
    TeacherDTO toDto(Teacher s);

    @Named("userId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    UserDTO toDtoUserId(User user);
}
