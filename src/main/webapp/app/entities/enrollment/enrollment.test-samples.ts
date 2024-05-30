import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 21975,
  enrollmentStatus: 'PENDING',
};

export const sampleWithPartialData: IEnrollment = {
  id: 28281,
  enrollmentStatus: 'REJECTED',
  lastActivityAt: dayjs('2024-05-20T12:44'),
  enrollmentStartAt: dayjs('2024-05-20T11:57'),
  enrollmentEndAt: dayjs('2024-05-19T16:49'),
};

export const sampleWithFullData: IEnrollment = {
  id: 14749,
  enrollmentStatus: 'PENDING',
  lastActivityAt: dayjs('2024-05-20T01:26'),
  enrollmentStartAt: dayjs('2024-05-20T08:12'),
  enrollmentEndAt: dayjs('2024-05-20T01:51'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'REJECTED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
