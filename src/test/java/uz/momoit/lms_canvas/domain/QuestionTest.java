package uz.momoit.lms_canvas.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static uz.momoit.lms_canvas.domain.QuestionGroupTestSamples.*;
import static uz.momoit.lms_canvas.domain.QuestionTestSamples.*;

import org.junit.jupiter.api.Test;
import uz.momoit.lms_canvas.web.rest.TestUtil;

class QuestionTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Question.class);
        Question question1 = getQuestionSample1();
        Question question2 = new Question();
        assertThat(question1).isNotEqualTo(question2);

        question2.setId(question1.getId());
        assertThat(question1).isEqualTo(question2);

        question2 = getQuestionSample2();
        assertThat(question1).isNotEqualTo(question2);
    }

    @Test
    void questtionGroupTest() {
        Question question = getQuestionRandomSampleGenerator();
        QuestionGroup questionGroupBack = getQuestionGroupRandomSampleGenerator();

        question.setQuesttionGroup(questionGroupBack);
        assertThat(question.getQuesttionGroup()).isEqualTo(questionGroupBack);

        question.questtionGroup(null);
        assertThat(question.getQuesttionGroup()).isNull();
    }
}
