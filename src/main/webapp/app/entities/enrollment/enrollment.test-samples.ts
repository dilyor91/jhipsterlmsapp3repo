import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 20090,
  enrollmentStatus: 'ACTIVE',
};

export const sampleWithPartialData: IEnrollment = {
  id: 1911,
  enrollmentStatus: 'PENDING',
  lastActivityAt: dayjs('2024-05-20T12:02'),
  enrollmentStartAt: dayjs('2024-05-19T18:38'),
};

export const sampleWithFullData: IEnrollment = {
  id: 11581,
  enrollmentStatus: 'PENDING',
  lastActivityAt: dayjs('2024-05-20T09:35'),
  enrollmentStartAt: dayjs('2024-05-20T07:31'),
  enrollmentEndAt: dayjs('2024-05-20T09:19'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'REJECTED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
