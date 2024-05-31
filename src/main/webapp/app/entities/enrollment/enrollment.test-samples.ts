import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 29000,
  enrollmentStatus: 'PENDING',
};

export const sampleWithPartialData: IEnrollment = {
  id: 31662,
  enrollmentStatus: 'PENDING',
  lastActivityAt: dayjs('2024-05-19T14:35'),
  enrollmentStartAt: dayjs('2024-05-19T17:56'),
  enrollmentEndAt: dayjs('2024-05-20T08:07'),
};

export const sampleWithFullData: IEnrollment = {
  id: 23893,
  enrollmentStatus: 'REJECTED',
  lastActivityAt: dayjs('2024-05-20T01:22'),
  enrollmentStartAt: dayjs('2024-05-19T13:49'),
  enrollmentEndAt: dayjs('2024-05-19T18:08'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'REJECTED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
