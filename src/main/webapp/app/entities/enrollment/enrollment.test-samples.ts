import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 25966,
  enrollmentStatus: 'ACTIVE',
};

export const sampleWithPartialData: IEnrollment = {
  id: 30374,
  enrollmentStatus: 'REJECTED',
  enrollmentEndAt: dayjs('2024-05-19T17:24'),
};

export const sampleWithFullData: IEnrollment = {
  id: 4337,
  enrollmentStatus: 'REJECTED',
  lastActivityAt: dayjs('2024-05-19T19:02'),
  enrollmentStartAt: dayjs('2024-05-20T03:04'),
  enrollmentEndAt: dayjs('2024-05-19T19:41'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
