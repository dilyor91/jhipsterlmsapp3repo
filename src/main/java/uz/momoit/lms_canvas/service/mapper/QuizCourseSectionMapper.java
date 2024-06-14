package uz.momoit.lms_canvas.service.mapper;

import org.mapstruct.*;
import uz.momoit.lms_canvas.domain.Course;
import uz.momoit.lms_canvas.domain.CourseSection;
import uz.momoit.lms_canvas.domain.QuizCourseSection;
import uz.momoit.lms_canvas.service.dto.CourseDTO;
import uz.momoit.lms_canvas.service.dto.CourseSectionDTO;
import uz.momoit.lms_canvas.service.dto.QuizCourseSectionDTO;

/**
 * Mapper for the entity {@link QuizCourseSection} and its DTO {@link QuizCourseSectionDTO}.
 */
@Mapper(componentModel = "spring")
public interface QuizCourseSectionMapper extends EntityMapper<QuizCourseSectionDTO, QuizCourseSection> {
    @Mapping(target = "course", source = "course", qualifiedByName = "courseId")
    @Mapping(target = "courseSection", source = "courseSection", qualifiedByName = "courseSectionId")
    QuizCourseSectionDTO toDto(QuizCourseSection s);

    @Named("courseId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CourseDTO toDtoCourseId(Course course);

    @Named("courseSectionId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CourseSectionDTO toDtoCourseSectionId(CourseSection courseSection);
}
