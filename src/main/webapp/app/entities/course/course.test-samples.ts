import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 5577,
  courseName: 'furnace unto',
  courseCode: 'oh warm carve',
  courseStartDate: dayjs('2024-05-19T22:14'),
  courseEndDate: dayjs('2024-05-19T22:30'),
  courseFormat: 'ah through restructuring',
  published: true,
  storageQuota: 19788,
  status: true,
};

export const sampleWithPartialData: ICourse = {
  id: 9185,
  courseName: 'as',
  courseCode: 'croup and',
  courseStartDate: dayjs('2024-05-19T21:23'),
  courseEndDate: dayjs('2024-05-19T13:39'),
  courseFormat: 'deafen',
  published: true,
  selfEnrollmentCode: 'promptly perfume',
  storageQuota: 22911,
  status: false,
};

export const sampleWithFullData: ICourse = {
  id: 15579,
  courseName: 'following over till',
  courseCode: 'fireplace',
  courseImagePath: 'whose ex-husband whereas',
  courseStartDate: dayjs('2024-05-19T22:01'),
  courseEndDate: dayjs('2024-05-20T00:51'),
  courseFormat: 'whoever provided',
  published: false,
  selfEnrollment: true,
  selfEnrollmentCode: 'oh acidly gabble',
  storageQuota: 16885,
  status: false,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'ouch witty',
  courseCode: 'hastily present',
  courseStartDate: dayjs('2024-05-20T08:13'),
  courseEndDate: dayjs('2024-05-20T06:41'),
  courseFormat: 'ick till',
  published: true,
  storageQuota: 10683,
  status: true,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
