import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 32458,
  courseName: 'arch-rival hence er',
  courseCode: 'submitter helpfully',
  courseStartDate: dayjs('2024-05-19T22:03'),
  courseEndDate: dayjs('2024-05-20T01:26'),
  courseFormat: 'faraway',
  published: true,
  storageQuota: 29615,
  status: true,
};

export const sampleWithPartialData: ICourse = {
  id: 26271,
  courseName: 'on before',
  courseCode: 'abandoned pepper',
  courseImagePath: 'friendly quick-witted wildly',
  courseStartDate: dayjs('2024-05-19T14:52'),
  courseEndDate: dayjs('2024-05-19T15:14'),
  courseFormat: 'now',
  published: false,
  storageQuota: 3888,
  status: false,
};

export const sampleWithFullData: ICourse = {
  id: 24597,
  courseName: 'separately snarling expose',
  courseCode: 'ha awful',
  courseImagePath: 'rage pendulum',
  courseStartDate: dayjs('2024-05-20T03:03'),
  courseEndDate: dayjs('2024-05-19T22:03'),
  courseFormat: 'uh-huh commonly',
  published: false,
  selfEnrollment: false,
  selfEnrollmentCode: 'amidst',
  storageQuota: 5395,
  status: false,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'in',
  courseCode: 'or standing',
  courseStartDate: dayjs('2024-05-20T06:45'),
  courseEndDate: dayjs('2024-05-20T09:02'),
  courseFormat: 'indeed limply',
  published: true,
  storageQuota: 6529,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
