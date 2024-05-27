package uz.momoit.lms_canvas.service.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

/**
 * A DTO for the {@link uz.momoit.lms_canvas.domain.Attendance} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class AttendanceDTO implements Serializable {

    private Long id;

    private Instant attendanceDate;

    private CourseDTO course;

    private CourseSectionDTO courseSection;

    private UserDTO teacher;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(Instant attendanceDate) {
        this.attendanceDate = attendanceDate;
    }

    public CourseDTO getCourse() {
        return course;
    }

    public void setCourse(CourseDTO course) {
        this.course = course;
    }

    public CourseSectionDTO getCourseSection() {
        return courseSection;
    }

    public void setCourseSection(CourseSectionDTO courseSection) {
        this.courseSection = courseSection;
    }

    public UserDTO getTeacher() {
        return teacher;
    }

    public void setTeacher(UserDTO teacher) {
        this.teacher = teacher;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof AttendanceDTO)) {
            return false;
        }

        AttendanceDTO attendanceDTO = (AttendanceDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, attendanceDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "AttendanceDTO{" +
            "id=" + getId() +
            ", attendanceDate='" + getAttendanceDate() + "'" +
            ", course=" + getCourse() +
            ", courseSection=" + getCourseSection() +
            ", teacher=" + getTeacher() +
            "}";
    }
}
