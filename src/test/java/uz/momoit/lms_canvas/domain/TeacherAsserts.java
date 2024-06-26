package uz.momoit.lms_canvas.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class TeacherAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTeacherAllPropertiesEquals(Teacher expected, Teacher actual) {
        assertTeacherAutoGeneratedPropertiesEquals(expected, actual);
        assertTeacherAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTeacherAllUpdatablePropertiesEquals(Teacher expected, Teacher actual) {
        assertTeacherUpdatableFieldsEquals(expected, actual);
        assertTeacherUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTeacherAutoGeneratedPropertiesEquals(Teacher expected, Teacher actual) {
        assertThat(expected)
            .as("Verify Teacher auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTeacherUpdatableFieldsEquals(Teacher expected, Teacher actual) {
        assertThat(expected)
            .as("Verify Teacher relevant properties")
            .satisfies(e -> assertThat(e.getFirstName()).as("check firstName").isEqualTo(actual.getFirstName()))
            .satisfies(e -> assertThat(e.getLastName()).as("check lastName").isEqualTo(actual.getLastName()))
            .satisfies(e -> assertThat(e.getMiddleName()).as("check middleName").isEqualTo(actual.getMiddleName()))
            .satisfies(e -> assertThat(e.getGender()).as("check gender").isEqualTo(actual.getGender()))
            .satisfies(e -> assertThat(e.getBirthdate()).as("check birthdate").isEqualTo(actual.getBirthdate()))
            .satisfies(e -> assertThat(e.getPhoneNumber()).as("check phoneNumber").isEqualTo(actual.getPhoneNumber()))
            .satisfies(e -> assertThat(e.getEmail()).as("check email").isEqualTo(actual.getEmail()))
            .satisfies(e -> assertThat(e.getPassportNumber()).as("check passportNumber").isEqualTo(actual.getPassportNumber()))
            .satisfies(e -> assertThat(e.getJshshir()).as("check jshshir").isEqualTo(actual.getJshshir()))
            .satisfies(e -> assertThat(e.getIsActive()).as("check isActive").isEqualTo(actual.getIsActive()))
            .satisfies(e -> assertThat(e.getNationality()).as("check nationality").isEqualTo(actual.getNationality()))
            .satisfies(e -> assertThat(e.getCountry()).as("check country").isEqualTo(actual.getCountry()))
            .satisfies(e -> assertThat(e.getCity()).as("check city").isEqualTo(actual.getCity()))
            .satisfies(e -> assertThat(e.getRegion()).as("check region").isEqualTo(actual.getRegion()))
            .satisfies(e -> assertThat(e.getAddressLine()).as("check addressLine").isEqualTo(actual.getAddressLine()))
            .satisfies(e -> assertThat(e.getPosition()).as("check position").isEqualTo(actual.getPosition()))
            .satisfies(e -> assertThat(e.getAcademicDegree()).as("check academicDegree").isEqualTo(actual.getAcademicDegree()))
            .satisfies(e -> assertThat(e.getAcademicTitle()).as("check academicTitle").isEqualTo(actual.getAcademicTitle()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTeacherUpdatableRelationshipsEquals(Teacher expected, Teacher actual) {
        assertThat(expected)
            .as("Verify Teacher relationships")
            .satisfies(e -> assertThat(e.getFaculty()).as("check faculty").isEqualTo(actual.getFaculty()))
            .satisfies(e -> assertThat(e.getDepartment()).as("check department").isEqualTo(actual.getDepartment()));
    }
}
