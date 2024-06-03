import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 24828,
  enrollmentStatus: 'PENDING',
};

export const sampleWithPartialData: IEnrollment = {
  id: 19893,
  enrollmentStatus: 'PENDING',
  enrollmentStartAt: dayjs('2024-05-19T22:10'),
};

export const sampleWithFullData: IEnrollment = {
  id: 22530,
  enrollmentStatus: 'ACTIVE',
  lastActivityAt: dayjs('2024-05-20T00:53'),
  enrollmentStartAt: dayjs('2024-05-19T18:21'),
  enrollmentEndAt: dayjs('2024-05-20T09:03'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'REJECTED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
