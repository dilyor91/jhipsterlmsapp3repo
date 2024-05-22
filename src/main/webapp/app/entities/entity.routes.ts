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
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
