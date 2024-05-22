import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 25465,
  enrollmentStatus: 'REJECTED',
};

export const sampleWithPartialData: IEnrollment = {
  id: 26965,
  enrollmentStatus: 'PENDING',
};

export const sampleWithFullData: IEnrollment = {
  id: 14346,
  enrollmentStatus: 'ACTIVE',
  lastActivityAt: dayjs('2024-05-20T07:23'),
  enrollmentStartAt: dayjs('2024-05-20T08:02'),
  enrollmentEndAt: dayjs('2024-05-19T21:35'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
