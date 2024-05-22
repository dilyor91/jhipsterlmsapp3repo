import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 30510,
  enrollmentStatus: 'ACTIVE',
};

export const sampleWithPartialData: IEnrollment = {
  id: 2186,
  enrollmentStatus: 'PENDING',
  lastActivityAt: dayjs('2024-05-19T20:28'),
  enrollmentStartAt: dayjs('2024-05-19T22:36'),
};

export const sampleWithFullData: IEnrollment = {
  id: 1615,
  enrollmentStatus: 'REJECTED',
  lastActivityAt: dayjs('2024-05-20T12:15'),
  enrollmentStartAt: dayjs('2024-05-19T17:03'),
  enrollmentEndAt: dayjs('2024-05-20T07:04'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'REJECTED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
