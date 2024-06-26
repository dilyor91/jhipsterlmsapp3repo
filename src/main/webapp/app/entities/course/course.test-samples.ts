import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 27030,
  courseName: 'for',
  courseCode: 'unbearably diamond',
  courseStartDate: dayjs('2024-05-20T07:59'),
  courseEndDate: dayjs('2024-05-19T20:10'),
  courseFormat: 'cringe whereas',
  published: true,
  storageQuota: 8848,
  status: true,
};

export const sampleWithPartialData: ICourse = {
  id: 22826,
  courseName: 'block focused',
  courseCode: 'from',
  courseImagePath: 'even',
  courseStartDate: dayjs('2024-05-20T09:32'),
  courseEndDate: dayjs('2024-05-20T02:56'),
  courseFormat: 'boohoo',
  published: false,
  selfEnrollment: true,
  storageQuota: 18645,
  status: true,
};

export const sampleWithFullData: ICourse = {
  id: 20112,
  courseName: 'eventually for purity',
  courseCode: 'radiant likewise',
  courseImagePath: 'reservation',
  courseStartDate: dayjs('2024-05-20T12:51'),
  courseEndDate: dayjs('2024-05-19T21:30'),
  courseFormat: 'out habitat unexpectedly',
  published: false,
  selfEnrollment: false,
  selfEnrollmentCode: 'on upon atop',
  storageQuota: 27856,
  status: false,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'qua busily',
  courseCode: 'apropos',
  courseStartDate: dayjs('2024-05-19T19:38'),
  courseEndDate: dayjs('2024-05-19T23:24'),
  courseFormat: 'naturally',
  published: false,
  storageQuota: 15818,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
