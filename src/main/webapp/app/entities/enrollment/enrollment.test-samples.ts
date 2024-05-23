import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 17627,
  enrollmentStatus: 'PENDING',
};

export const sampleWithPartialData: IEnrollment = {
  id: 4418,
  enrollmentStatus: 'REJECTED',
  lastActivityAt: dayjs('2024-05-20T12:57'),
};

export const sampleWithFullData: IEnrollment = {
  id: 30350,
  enrollmentStatus: 'REJECTED',
  lastActivityAt: dayjs('2024-05-20T12:55'),
  enrollmentStartAt: dayjs('2024-05-20T07:31'),
  enrollmentEndAt: dayjs('2024-05-19T15:05'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'REJECTED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
