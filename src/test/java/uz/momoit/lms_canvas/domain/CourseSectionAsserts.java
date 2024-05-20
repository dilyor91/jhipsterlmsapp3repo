package uz.momoit.lms_canvas.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class CourseSectionAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertCourseSectionAllPropertiesEquals(CourseSection expected, CourseSection actual) {
        assertCourseSectionAutoGeneratedPropertiesEquals(expected, actual);
        assertCourseSectionAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertCourseSectionAllUpdatablePropertiesEquals(CourseSection expected, CourseSection actual) {
        assertCourseSectionUpdatableFieldsEquals(expected, actual);
        assertCourseSectionUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertCourseSectionAutoGeneratedPropertiesEquals(CourseSection expected, CourseSection actual) {
        assertThat(expected)
            .as("Verify CourseSection auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertCourseSectionUpdatableFieldsEquals(CourseSection expected, CourseSection actual) {
        assertThat(expected)
            .as("Verify CourseSection relevant properties")
            .satisfies(e -> assertThat(e.getSectionName()).as("check sectionName").isEqualTo(actual.getSectionName()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertCourseSectionUpdatableRelationshipsEquals(CourseSection expected, CourseSection actual) {
        assertThat(expected)
            .as("Verify CourseSection relationships")
            .satisfies(e -> assertThat(e.getCourse()).as("check course").isEqualTo(actual.getCourse()))
            .satisfies(e -> assertThat(e.getAnnouncements()).as("check announcements").isEqualTo(actual.getAnnouncements()));
    }
}
