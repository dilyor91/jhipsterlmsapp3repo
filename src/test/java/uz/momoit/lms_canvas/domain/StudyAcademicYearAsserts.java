package uz.momoit.lms_canvas.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class StudyAcademicYearAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertStudyAcademicYearAllPropertiesEquals(StudyAcademicYear expected, StudyAcademicYear actual) {
        assertStudyAcademicYearAutoGeneratedPropertiesEquals(expected, actual);
        assertStudyAcademicYearAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertStudyAcademicYearAllUpdatablePropertiesEquals(StudyAcademicYear expected, StudyAcademicYear actual) {
        assertStudyAcademicYearUpdatableFieldsEquals(expected, actual);
        assertStudyAcademicYearUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertStudyAcademicYearAutoGeneratedPropertiesEquals(StudyAcademicYear expected, StudyAcademicYear actual) {
        assertThat(expected)
            .as("Verify StudyAcademicYear auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertStudyAcademicYearUpdatableFieldsEquals(StudyAcademicYear expected, StudyAcademicYear actual) {
        assertThat(expected)
            .as("Verify StudyAcademicYear relevant properties")
            .satisfies(e -> assertThat(e.getFromDate()).as("check fromDate").isEqualTo(actual.getFromDate()))
            .satisfies(e -> assertThat(e.getEndDate()).as("check endDate").isEqualTo(actual.getEndDate()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertStudyAcademicYearUpdatableRelationshipsEquals(StudyAcademicYear expected, StudyAcademicYear actual) {}
}
