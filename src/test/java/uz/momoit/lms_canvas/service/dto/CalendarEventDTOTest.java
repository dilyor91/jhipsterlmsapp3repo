package uz.momoit.lms_canvas.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import uz.momoit.lms_canvas.web.rest.TestUtil;

class CalendarEventDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(CalendarEventDTO.class);
        CalendarEventDTO calendarEventDTO1 = new CalendarEventDTO();
        calendarEventDTO1.setId(1L);
        CalendarEventDTO calendarEventDTO2 = new CalendarEventDTO();
        assertThat(calendarEventDTO1).isNotEqualTo(calendarEventDTO2);
        calendarEventDTO2.setId(calendarEventDTO1.getId());
        assertThat(calendarEventDTO1).isEqualTo(calendarEventDTO2);
        calendarEventDTO2.setId(2L);
        assertThat(calendarEventDTO1).isNotEqualTo(calendarEventDTO2);
        calendarEventDTO1.setId(null);
        assertThat(calendarEventDTO1).isNotEqualTo(calendarEventDTO2);
    }
}
