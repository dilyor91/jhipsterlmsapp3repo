import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 10053,
  enrollmentStatus: 'PENDING',
};

export const sampleWithPartialData: IEnrollment = {
  id: 25332,
  enrollmentStatus: 'PENDING',
  lastActivityAt: dayjs('2024-05-20T10:34'),
  enrollmentStartAt: dayjs('2024-05-20T07:32'),
  enrollmentEndAt: dayjs('2024-05-19T21:15'),
};

export const sampleWithFullData: IEnrollment = {
  id: 8744,
  enrollmentStatus: 'ACTIVE',
  lastActivityAt: dayjs('2024-05-19T21:32'),
  enrollmentStartAt: dayjs('2024-05-19T13:31'),
  enrollmentEndAt: dayjs('2024-05-20T07:47'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'PENDING',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
