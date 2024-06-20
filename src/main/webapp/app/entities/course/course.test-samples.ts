import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 1830,
  courseName: 'off',
  courseCode: 'provide furthermore because',
  courseStartDate: dayjs('2024-05-20T00:36'),
  courseEndDate: dayjs('2024-05-19T20:54'),
  courseFormat: 'gah tripod including',
  published: false,
  storageQuota: 1164,
  status: true,
};

export const sampleWithPartialData: ICourse = {
  id: 22307,
  courseName: 'hopelessly whereas',
  courseCode: 'believe force',
  courseImagePath: 'easy',
  courseStartDate: dayjs('2024-05-20T04:04'),
  courseEndDate: dayjs('2024-05-19T16:33'),
  courseFormat: 'until',
  published: true,
  selfEnrollment: false,
  storageQuota: 29301,
  status: true,
};

export const sampleWithFullData: ICourse = {
  id: 16789,
  courseName: 'real',
  courseCode: 'yum stopwatch mRNA',
  courseImagePath: 'feline',
  courseStartDate: dayjs('2024-05-20T03:05'),
  courseEndDate: dayjs('2024-05-19T20:46'),
  courseFormat: 'truthfully',
  published: false,
  selfEnrollment: false,
  selfEnrollmentCode: 'consequently swot anxiety',
  storageQuota: 18625,
  status: true,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'sanctify lap canst',
  courseCode: 'youthfully tomorrow',
  courseStartDate: dayjs('2024-05-20T04:06'),
  courseEndDate: dayjs('2024-05-20T09:26'),
  courseFormat: 'yowza vice wisely',
  published: false,
  storageQuota: 31064,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
