import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 21406,
  enrollmentStatus: 'PENDING',
};

export const sampleWithPartialData: IEnrollment = {
  id: 16349,
  enrollmentStatus: 'ACTIVE',
  lastActivityAt: dayjs('2024-05-19T22:42'),
  enrollmentDate: dayjs('2024-05-20T04:13'),
};

export const sampleWithFullData: IEnrollment = {
  id: 9560,
  enrollmentStatus: 'PENDING',
  lastActivityAt: dayjs('2024-05-20T03:08'),
  enrollmentDate: dayjs('2024-05-19T21:21'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
