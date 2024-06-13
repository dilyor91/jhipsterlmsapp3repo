import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 19828,
  courseName: 'boohoo dreamily incidentally',
  courseCode: 'plot ponce',
  courseStartDate: dayjs('2024-05-20T02:59'),
  courseEndDate: dayjs('2024-05-19T15:12'),
  courseFormat: 'weatherise',
  published: false,
  storageQuota: 16715,
  status: false,
};

export const sampleWithPartialData: ICourse = {
  id: 1229,
  courseName: 'hourly bear',
  courseCode: 'ick regard within',
  courseStartDate: dayjs('2024-05-19T16:53'),
  courseEndDate: dayjs('2024-05-20T04:41'),
  courseFormat: 'immense',
  published: true,
  selfEnrollmentCode: 'barstool impressive',
  storageQuota: 30999,
  status: false,
};

export const sampleWithFullData: ICourse = {
  id: 18293,
  courseName: 'adventurously whose shocked',
  courseCode: 'gah',
  courseImagePath: 'tune-up brr',
  courseStartDate: dayjs('2024-05-19T18:39'),
  courseEndDate: dayjs('2024-05-19T19:53'),
  courseFormat: 'fountain ha till',
  published: true,
  selfEnrollment: true,
  selfEnrollmentCode: 'mechanically',
  storageQuota: 2647,
  status: false,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'wicked times',
  courseCode: 'notwithstanding anxiously',
  courseStartDate: dayjs('2024-05-20T01:58'),
  courseEndDate: dayjs('2024-05-19T16:18'),
  courseFormat: 'ouch',
  published: true,
  storageQuota: 22537,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
