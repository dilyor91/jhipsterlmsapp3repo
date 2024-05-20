import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 18387,
  courseName: 'locomotive unrealistic biscuit',
  courseCode: 'properly heavily',
  courseStartDate: dayjs('2024-05-20T02:16'),
  courseEndDate: dayjs('2024-05-19T14:56'),
  courseFormat: 'meanwhile cure',
  published: false,
  storageQuota: 2337,
  status: true,
};

export const sampleWithPartialData: ICourse = {
  id: 20183,
  courseName: 'offbeat prickle ranch',
  courseCode: 'profuse',
  courseStartDate: dayjs('2024-05-20T06:55'),
  courseEndDate: dayjs('2024-05-19T17:04'),
  courseFormat: 'sometimes er suburb',
  published: true,
  selfEnrollment: true,
  storageQuota: 8626,
  status: false,
};

export const sampleWithFullData: ICourse = {
  id: 11832,
  courseName: 'despite colonial',
  courseCode: 'if overextend outlast',
  courseImagePath: 'ack gleaming',
  courseStartDate: dayjs('2024-05-20T02:29'),
  courseEndDate: dayjs('2024-05-20T01:48'),
  courseFormat: 'unfortunate',
  published: false,
  selfEnrollment: true,
  selfEnrollmentCode: 'mutate gah',
  storageQuota: 27053,
  status: true,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'maid airmail',
  courseCode: 'cluttered',
  courseStartDate: dayjs('2024-05-19T14:54'),
  courseEndDate: dayjs('2024-05-20T04:50'),
  courseFormat: 'rainy yowza lentil',
  published: true,
  storageQuota: 29822,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
