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
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
