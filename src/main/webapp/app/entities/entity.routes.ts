import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'jhipsterlmsapp3App.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'course',
    data: { pageTitle: 'jhipsterlmsapp3App.course.home.title' },
    loadChildren: () => import('./course/course.routes'),
  },
  {
    path: 'course-section',
    data: { pageTitle: 'jhipsterlmsapp3App.courseSection.home.title' },
    loadChildren: () => import('./course-section/course-section.routes'),
  },
  {
    path: 'accounts',
    data: { pageTitle: 'jhipsterlmsapp3App.accounts.home.title' },
    loadChildren: () => import('./accounts/accounts.routes'),
  },
  {
    path: 'enrollment',
    data: { pageTitle: 'jhipsterlmsapp3App.enrollment.home.title' },
    loadChildren: () => import('./enrollment/enrollment.routes'),
  },
  {
    path: 'announcement',
    data: { pageTitle: 'jhipsterlmsapp3App.announcement.home.title' },
    loadChildren: () => import('./announcement/announcement.routes'),
  },
  {
    path: 'assignment',
    data: { pageTitle: 'jhipsterlmsapp3App.assignment.home.title' },
    loadChildren: () => import('./assignment/assignment.routes'),
  },
  {
    path: 'calendar-event',
    data: { pageTitle: 'jhipsterlmsapp3App.calendarEvent.home.title' },
    loadChildren: () => import('./calendar-event/calendar-event.routes'),
  },
  {
    path: 'wiki-page',
    data: { pageTitle: 'jhipsterlmsapp3App.wikiPage.home.title' },
    loadChildren: () => import('./wiki-page/wiki-page.routes'),
  },
  {
    path: 'attendance',
    data: { pageTitle: 'jhipsterlmsapp3App.attendance.home.title' },
    loadChildren: () => import('./attendance/attendance.routes'),
  },
  {
    path: 'attendance-detail',
    data: { pageTitle: 'jhipsterlmsapp3App.attendanceDetail.home.title' },
    loadChildren: () => import('./attendance-detail/attendance-detail.routes'),
  },
  {
    path: 'student',
    data: { pageTitle: 'jhipsterlmsapp3App.student.home.title' },
    loadChildren: () => import('./student/student.routes'),
  },
  {
    path: 'faculty',
    data: { pageTitle: 'jhipsterlmsapp3App.faculty.home.title' },
    loadChildren: () => import('./faculty/faculty.routes'),
  },
  {
    path: 'speciality',
    data: { pageTitle: 'jhipsterlmsapp3App.speciality.home.title' },
    loadChildren: () => import('./speciality/speciality.routes'),
  },
  {
    path: 'group',
    data: { pageTitle: 'jhipsterlmsapp3App.group.home.title' },
    loadChildren: () => import('./group/group.routes'),
  },
  {
    path: 'study-academic-year',
    data: { pageTitle: 'jhipsterlmsapp3App.studyAcademicYear.home.title' },
    loadChildren: () => import('./study-academic-year/study-academic-year.routes'),
  },
  {
    path: 'teacher',
    data: { pageTitle: 'jhipsterlmsapp3App.teacher.home.title' },
    loadChildren: () => import('./teacher/teacher.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'jhipsterlmsapp3App.department.home.title' },
    loadChildren: () => import('./department/department.routes'),
  },
  {
    path: 'question-group',
    data: { pageTitle: 'jhipsterlmsapp3App.questionGroup.home.title' },
    loadChildren: () => import('./question-group/question-group.routes'),
  },
  {
    path: 'question',
    data: { pageTitle: 'jhipsterlmsapp3App.question.home.title' },
    loadChildren: () => import('./question/question.routes'),
  },
  {
    path: 'option',
    data: { pageTitle: 'jhipsterlmsapp3App.option.home.title' },
    loadChildren: () => import('./option/option.routes'),
  },
  {
    path: 'quiz',
    data: { pageTitle: 'jhipsterlmsapp3App.quiz.home.title' },
    loadChildren: () => import('./quiz/quiz.routes'),
  },
  {
    path: 'quiz-question-group',
    data: { pageTitle: 'jhipsterlmsapp3App.quizQuestionGroup.home.title' },
    loadChildren: () => import('./quiz-question-group/quiz-question-group.routes'),
  },
  {
    path: 'quiz-course-section',
    data: { pageTitle: 'jhipsterlmsapp3App.quizCourseSection.home.title' },
    loadChildren: () => import('./quiz-course-section/quiz-course-section.routes'),
  },
  {
    path: 'quiz-session',
    data: { pageTitle: 'jhipsterlmsapp3App.quizSession.home.title' },
    loadChildren: () => import('./quiz-session/quiz-session.routes'),
  },
  {
    path: 'student-option',
    data: { pageTitle: 'jhipsterlmsapp3App.studentOption.home.title' },
    loadChildren: () => import('./student-option/student-option.routes'),
  },
  {
    path: 'student-question',
    data: { pageTitle: 'jhipsterlmsapp3App.studentQuestion.home.title' },
    loadChildren: () => import('./student-question/student-question.routes'),
  },
  {
    path: 'student-answer-question',
    data: { pageTitle: 'jhipsterlmsapp3App.studentAnswerQuestion.home.title' },
    loadChildren: () => import('./student-answer-question/student-answer-question.routes'),
  },
  {
    path: 'quiz-result',
    data: { pageTitle: 'jhipsterlmsapp3App.quizResult.home.title' },
    loadChildren: () => import('./quiz-result/quiz-result.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
