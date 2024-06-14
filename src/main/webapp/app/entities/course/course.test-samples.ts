import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 689,
  courseName: 'amongst whistle',
  courseCode: 'blah profession instantly',
  courseStartDate: dayjs('2024-05-20T03:43'),
  courseEndDate: dayjs('2024-05-20T12:38'),
  courseFormat: 'communicant meh',
  published: false,
  storageQuota: 21409,
  status: true,
};

export const sampleWithPartialData: ICourse = {
  id: 12740,
  courseName: 'wetly chief',
  courseCode: 'oh',
  courseImagePath: 'how so yuck',
  courseStartDate: dayjs('2024-05-19T18:15'),
  courseEndDate: dayjs('2024-05-19T21:46'),
  courseFormat: 'boohoo',
  published: true,
  selfEnrollment: true,
  selfEnrollmentCode: 'amidst likely',
  storageQuota: 22525,
  status: true,
};

export const sampleWithFullData: ICourse = {
  id: 16065,
  courseName: 'boohoo',
  courseCode: 'poor renovate lest',
  courseImagePath: 'viciously',
  courseStartDate: dayjs('2024-05-20T08:14'),
  courseEndDate: dayjs('2024-05-19T17:29'),
  courseFormat: 'agonizing marshland inasmuch',
  published: false,
  selfEnrollment: false,
  selfEnrollmentCode: 'into',
  storageQuota: 4747,
  status: true,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'standing',
  courseCode: 'cranberry',
  courseStartDate: dayjs('2024-05-20T10:12'),
  courseEndDate: dayjs('2024-05-19T16:17'),
  courseFormat: 'tattle',
  published: false,
  storageQuota: 9175,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
