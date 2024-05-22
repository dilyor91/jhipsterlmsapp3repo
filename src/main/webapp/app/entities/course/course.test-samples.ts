import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 23431,
  courseName: 'netbook coarsen oh',
  courseCode: 'yahoo',
  courseStartDate: dayjs('2024-05-20T12:33'),
  courseEndDate: dayjs('2024-05-20T12:30'),
  courseFormat: 'fooey than',
  published: false,
  storageQuota: 18947,
  status: false,
};

export const sampleWithPartialData: ICourse = {
  id: 498,
  courseName: 'forenenst disguised',
  courseCode: 'photograph indeed wherever',
  courseStartDate: dayjs('2024-05-19T15:07'),
  courseEndDate: dayjs('2024-05-20T04:34'),
  courseFormat: 'finger tape',
  published: false,
  selfEnrollmentCode: 'dirty worth',
  storageQuota: 11371,
  status: false,
};

export const sampleWithFullData: ICourse = {
  id: 7318,
  courseName: 'bathroom courageously suspend',
  courseCode: 'debit',
  courseImagePath: 'zowie if who',
  courseStartDate: dayjs('2024-05-19T19:26'),
  courseEndDate: dayjs('2024-05-20T01:11'),
  courseFormat: 'precipitation',
  published: true,
  selfEnrollment: true,
  selfEnrollmentCode: 'unfortunately perception grotesque',
  storageQuota: 26846,
  status: true,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'incidentally brr gadzooks',
  courseCode: 'property how abaft',
  courseStartDate: dayjs('2024-05-19T22:45'),
  courseEndDate: dayjs('2024-05-20T07:37'),
  courseFormat: 'sans forfeit',
  published: false,
  storageQuota: 2683,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
