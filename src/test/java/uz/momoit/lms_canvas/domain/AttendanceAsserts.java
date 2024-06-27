package uz.momoit.lms_canvas.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class AttendanceAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAttendanceAllPropertiesEquals(Attendance expected, Attendance actual) {
        assertAttendanceAutoGeneratedPropertiesEquals(expected, actual);
        assertAttendanceAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAttendanceAllUpdatablePropertiesEquals(Attendance expected, Attendance actual) {
        assertAttendanceUpdatableFieldsEquals(expected, actual);
        assertAttendanceUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAttendanceAutoGeneratedPropertiesEquals(Attendance expected, Attendance actual) {
        assertThat(expected)
            .as("Verify Attendance auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAttendanceUpdatableFieldsEquals(Attendance expected, Attendance actual) {
        assertThat(expected)
            .as("Verify Attendance relevant properties")
            .satisfies(e -> assertThat(e.getAttendanceEnum()).as("check attendanceEnum").isEqualTo(actual.getAttendanceEnum()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAttendanceUpdatableRelationshipsEquals(Attendance expected, Attendance actual) {
        assertThat(expected)
            .as("Verify Attendance relationships")
            .satisfies(e -> assertThat(e.getStudent()).as("check student").isEqualTo(actual.getStudent()))
            .satisfies(e -> assertThat(e.getLesson()).as("check lesson").isEqualTo(actual.getLesson()))
            .satisfies(e -> assertThat(e.getCourse()).as("check course").isEqualTo(actual.getCourse()))
            .satisfies(e -> assertThat(e.getCourseSection()).as("check courseSection").isEqualTo(actual.getCourseSection()));
    }
}
