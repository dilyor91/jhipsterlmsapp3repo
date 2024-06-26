import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 12800,
  enrollmentStatus: 'PENDING',
};

export const sampleWithPartialData: IEnrollment = {
  id: 26505,
  enrollmentStatus: 'REJECTED',
  enrollmentDate: dayjs('2024-05-20T09:20'),
};

export const sampleWithFullData: IEnrollment = {
  id: 22235,
  enrollmentStatus: 'ACTIVE',
  lastActivityAt: dayjs('2024-05-19T17:07'),
  enrollmentDate: dayjs('2024-05-20T08:07'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
