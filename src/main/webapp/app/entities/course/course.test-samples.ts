import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 19932,
  courseName: 'ick certificate gah',
  courseCode: 'who tangerine',
  courseStartDate: dayjs('2024-05-19T14:10'),
  courseEndDate: dayjs('2024-05-20T10:08'),
  courseFormat: 'limit athletics qua',
  published: true,
  storageQuota: 24782,
  status: false,
};

export const sampleWithPartialData: ICourse = {
  id: 32443,
  courseName: 'despite whoever',
  courseCode: 'what fooey',
  courseStartDate: dayjs('2024-05-19T21:50'),
  courseEndDate: dayjs('2024-05-19T22:52'),
  courseFormat: 'by by because',
  published: false,
  storageQuota: 3426,
  status: false,
};

export const sampleWithFullData: ICourse = {
  id: 12975,
  courseName: 'diner forsaken superintend',
  courseCode: 'at exclude microwave',
  courseImagePath: 'why',
  courseStartDate: dayjs('2024-05-20T07:19'),
  courseEndDate: dayjs('2024-05-20T05:08'),
  courseFormat: 'ha',
  published: false,
  selfEnrollment: true,
  selfEnrollmentCode: 'until hmph',
  storageQuota: 21654,
  status: false,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'yahoo',
  courseCode: 'huge',
  courseStartDate: dayjs('2024-05-20T10:12'),
  courseEndDate: dayjs('2024-05-19T21:11'),
  courseFormat: 'jealously evil why',
  published: false,
  storageQuota: 22805,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
