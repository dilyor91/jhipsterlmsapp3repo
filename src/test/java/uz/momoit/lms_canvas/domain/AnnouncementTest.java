package uz.momoit.lms_canvas.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static uz.momoit.lms_canvas.domain.AnnouncementTestSamples.*;
import static uz.momoit.lms_canvas.domain.CourseSectionTestSamples.*;

import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;
import uz.momoit.lms_canvas.web.rest.TestUtil;

class AnnouncementTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Announcement.class);
        Announcement announcement1 = getAnnouncementSample1();
        Announcement announcement2 = new Announcement();
        assertThat(announcement1).isNotEqualTo(announcement2);

        announcement2.setId(announcement1.getId());
        assertThat(announcement1).isEqualTo(announcement2);

        announcement2 = getAnnouncementSample2();
        assertThat(announcement1).isNotEqualTo(announcement2);
    }

    @Test
    void courseSectionTest() throws Exception {
        Announcement announcement = getAnnouncementRandomSampleGenerator();
        CourseSection courseSectionBack = getCourseSectionRandomSampleGenerator();

        announcement.addCourseSection(courseSectionBack);
        assertThat(announcement.getCourseSections()).containsOnly(courseSectionBack);

        announcement.removeCourseSection(courseSectionBack);
        assertThat(announcement.getCourseSections()).doesNotContain(courseSectionBack);

        announcement.courseSections(new HashSet<>(Set.of(courseSectionBack)));
        assertThat(announcement.getCourseSections()).containsOnly(courseSectionBack);

        announcement.setCourseSections(new HashSet<>());
        assertThat(announcement.getCourseSections()).doesNotContain(courseSectionBack);
    }
}
