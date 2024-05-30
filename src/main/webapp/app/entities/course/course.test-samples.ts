import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 3379,
  courseName: 'scarily document snooze',
  courseCode: 'sadly',
  courseStartDate: dayjs('2024-05-19T20:07'),
  courseEndDate: dayjs('2024-05-20T08:08'),
  courseFormat: 'below sour bullet',
  published: false,
  storageQuota: 3646,
  status: false,
};

export const sampleWithPartialData: ICourse = {
  id: 15651,
  courseName: 'array but',
  courseCode: 'hearsay whack',
  courseStartDate: dayjs('2024-05-19T18:57'),
  courseEndDate: dayjs('2024-05-20T09:06'),
  courseFormat: 'hence plus slimy',
  published: true,
  selfEnrollment: true,
  storageQuota: 23167,
  status: false,
};

export const sampleWithFullData: ICourse = {
  id: 16981,
  courseName: 'um cower whoa',
  courseCode: 'soprano',
  courseImagePath: 'lest',
  courseStartDate: dayjs('2024-05-19T13:58'),
  courseEndDate: dayjs('2024-05-20T08:49'),
  courseFormat: 'lion',
  published: false,
  selfEnrollment: false,
  selfEnrollmentCode: 'electrify',
  storageQuota: 14540,
  status: true,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'pare helpful',
  courseCode: 'so ouch aha',
  courseStartDate: dayjs('2024-05-20T01:44'),
  courseEndDate: dayjs('2024-05-19T17:51'),
  courseFormat: 'horrible corny',
  published: false,
  storageQuota: 12734,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
