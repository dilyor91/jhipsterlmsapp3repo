package uz.momoit.lms_canvas.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class AnnouncementAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAnnouncementAllPropertiesEquals(Announcement expected, Announcement actual) {
        assertAnnouncementAutoGeneratedPropertiesEquals(expected, actual);
        assertAnnouncementAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAnnouncementAllUpdatablePropertiesEquals(Announcement expected, Announcement actual) {
        assertAnnouncementUpdatableFieldsEquals(expected, actual);
        assertAnnouncementUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAnnouncementAutoGeneratedPropertiesEquals(Announcement expected, Announcement actual) {
        assertThat(expected)
            .as("Verify Announcement auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAnnouncementUpdatableFieldsEquals(Announcement expected, Announcement actual) {
        assertThat(expected)
            .as("Verify Announcement relevant properties")
            .satisfies(e -> assertThat(e.getTitle()).as("check title").isEqualTo(actual.getTitle()))
            .satisfies(e -> assertThat(e.getContent()).as("check content").isEqualTo(actual.getContent()))
            .satisfies(e -> assertThat(e.getAttachmentId()).as("check attachmentId").isEqualTo(actual.getAttachmentId()))
            .satisfies(e -> assertThat(e.getDelayPost()).as("check delayPost").isEqualTo(actual.getDelayPost()))
            .satisfies(e -> assertThat(e.getPostAt()).as("check postAt").isEqualTo(actual.getPostAt()))
            .satisfies(e -> assertThat(e.getPublished()).as("check published").isEqualTo(actual.getPublished()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAnnouncementUpdatableRelationshipsEquals(Announcement expected, Announcement actual) {
        assertThat(expected)
            .as("Verify Announcement relationships")
            .satisfies(e -> assertThat(e.getCourseSections()).as("check courseSections").isEqualTo(actual.getCourseSections()));
    }
}
