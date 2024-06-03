import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 27629,
  courseName: 'decode behind loudly',
  courseCode: 'alphabet',
  courseStartDate: dayjs('2024-05-20T01:35'),
  courseEndDate: dayjs('2024-05-20T04:45'),
  courseFormat: 'once',
  published: false,
  storageQuota: 12827,
  status: false,
};

export const sampleWithPartialData: ICourse = {
  id: 25727,
  courseName: 'if amongst congregate',
  courseCode: 'influx pish verification',
  courseImagePath: 'rekindle furthermore yippee',
  courseStartDate: dayjs('2024-05-20T02:11'),
  courseEndDate: dayjs('2024-05-19T15:08'),
  courseFormat: 'thoughtfully boohoo',
  published: true,
  storageQuota: 18910,
  status: false,
};

export const sampleWithFullData: ICourse = {
  id: 4568,
  courseName: 'gossip woot',
  courseCode: 'duh',
  courseImagePath: 'soup',
  courseStartDate: dayjs('2024-05-20T11:00'),
  courseEndDate: dayjs('2024-05-19T19:53'),
  courseFormat: 'what stabilise',
  published: false,
  selfEnrollment: false,
  selfEnrollmentCode: 'square',
  storageQuota: 3085,
  status: true,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'amongst',
  courseCode: 'allude',
  courseStartDate: dayjs('2024-05-19T16:03'),
  courseEndDate: dayjs('2024-05-19T15:02'),
  courseFormat: 'refund into',
  published: false,
  storageQuota: 23977,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
