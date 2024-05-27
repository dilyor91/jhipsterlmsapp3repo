import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 31036,
  courseName: 'ha upliftingly',
  courseCode: 'beet',
  courseStartDate: dayjs('2024-05-19T17:59'),
  courseEndDate: dayjs('2024-05-20T02:42'),
  courseFormat: 'the abaft',
  published: false,
  storageQuota: 6560,
  status: true,
};

export const sampleWithPartialData: ICourse = {
  id: 28484,
  courseName: 'off',
  courseCode: 'compartmentalise',
  courseStartDate: dayjs('2024-05-19T16:49'),
  courseEndDate: dayjs('2024-05-20T03:37'),
  courseFormat: 'semaphore palatable interestingly',
  published: false,
  selfEnrollment: true,
  storageQuota: 12870,
  status: true,
};

export const sampleWithFullData: ICourse = {
  id: 2041,
  courseName: 'nor',
  courseCode: 'though',
  courseImagePath: 'considering',
  courseStartDate: dayjs('2024-05-20T04:52'),
  courseEndDate: dayjs('2024-05-20T03:03'),
  courseFormat: 'sparkling refurbish',
  published: false,
  selfEnrollment: true,
  selfEnrollmentCode: 'what',
  storageQuota: 10297,
  status: false,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'upward fragment than',
  courseCode: 'direct unto lucky',
  courseStartDate: dayjs('2024-05-20T04:36'),
  courseEndDate: dayjs('2024-05-20T05:10'),
  courseFormat: 'preclude lightly',
  published: true,
  storageQuota: 1012,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
