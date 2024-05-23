import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 2016,
  courseName: 'juggle',
  courseCode: 'although',
  courseStartDate: dayjs('2024-05-19T21:05'),
  courseEndDate: dayjs('2024-05-20T10:30'),
  courseFormat: 'seeker admire',
  published: false,
  storageQuota: 21723,
  status: false,
};

export const sampleWithPartialData: ICourse = {
  id: 25605,
  courseName: 'aha geez ouch',
  courseCode: 'while whereas',
  courseStartDate: dayjs('2024-05-19T22:26'),
  courseEndDate: dayjs('2024-05-19T16:44'),
  courseFormat: 'shell ha fooey',
  published: false,
  selfEnrollment: false,
  selfEnrollmentCode: 'earmark excellent among',
  storageQuota: 32664,
  status: false,
};

export const sampleWithFullData: ICourse = {
  id: 17294,
  courseName: 'carefree gadzooks that',
  courseCode: 'aw tremendously meme',
  courseImagePath: 'gosling er pong',
  courseStartDate: dayjs('2024-05-20T08:22'),
  courseEndDate: dayjs('2024-05-19T20:20'),
  courseFormat: 'severe whether',
  published: false,
  selfEnrollment: true,
  selfEnrollmentCode: 'stick whose helpful',
  storageQuota: 18893,
  status: true,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'that yowza supposing',
  courseCode: 'along swordfight cluck',
  courseStartDate: dayjs('2024-05-19T16:22'),
  courseEndDate: dayjs('2024-05-20T08:40'),
  courseFormat: 'than motionless governance',
  published: true,
  storageQuota: 28710,
  status: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
