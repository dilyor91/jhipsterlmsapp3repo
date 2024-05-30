package uz.momoit.lms_canvas.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static uz.momoit.lms_canvas.domain.SpecialityTestSamples.*;

import org.junit.jupiter.api.Test;
import uz.momoit.lms_canvas.web.rest.TestUtil;

class SpecialityTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Speciality.class);
        Speciality speciality1 = getSpecialitySample1();
        Speciality speciality2 = new Speciality();
        assertThat(speciality1).isNotEqualTo(speciality2);

        speciality2.setId(speciality1.getId());
        assertThat(speciality1).isEqualTo(speciality2);

        speciality2 = getSpecialitySample2();
        assertThat(speciality1).isNotEqualTo(speciality2);
    }

    @Test
    void hashCodeVerifier() throws Exception {
        Speciality speciality = new Speciality();
        assertThat(speciality.hashCode()).isZero();

        Speciality speciality1 = getSpecialitySample1();
        speciality.setId(speciality1.getId());
        assertThat(speciality).hasSameHashCodeAs(speciality1);
    }
}
