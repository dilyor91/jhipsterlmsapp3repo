package uz.momoit.lms_canvas.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class StudentAnswerQuestionAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertStudentAnswerQuestionAllPropertiesEquals(StudentAnswerQuestion expected, StudentAnswerQuestion actual) {
        assertStudentAnswerQuestionAutoGeneratedPropertiesEquals(expected, actual);
        assertStudentAnswerQuestionAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertStudentAnswerQuestionAllUpdatablePropertiesEquals(
        StudentAnswerQuestion expected,
        StudentAnswerQuestion actual
    ) {
        assertStudentAnswerQuestionUpdatableFieldsEquals(expected, actual);
        assertStudentAnswerQuestionUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertStudentAnswerQuestionAutoGeneratedPropertiesEquals(
        StudentAnswerQuestion expected,
        StudentAnswerQuestion actual
    ) {
        assertThat(expected)
            .as("Verify StudentAnswerQuestion auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertStudentAnswerQuestionUpdatableFieldsEquals(StudentAnswerQuestion expected, StudentAnswerQuestion actual) {
        assertThat(expected)
            .as("Verify StudentAnswerQuestion relevant properties")
            .satisfies(e -> assertThat(e.getIsCorrect()).as("check isCorrect").isEqualTo(actual.getIsCorrect()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertStudentAnswerQuestionUpdatableRelationshipsEquals(
        StudentAnswerQuestion expected,
        StudentAnswerQuestion actual
    ) {
        assertThat(expected)
            .as("Verify StudentAnswerQuestion relationships")
            .satisfies(e -> assertThat(e.getQuestion()).as("check question").isEqualTo(actual.getQuestion()))
            .satisfies(e -> assertThat(e.getOption()).as("check option").isEqualTo(actual.getOption()))
            .satisfies(e -> assertThat(e.getQuizSession()).as("check quizSession").isEqualTo(actual.getQuizSession()));
    }
}
