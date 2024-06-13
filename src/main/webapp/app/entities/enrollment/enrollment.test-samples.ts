import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 12541,
  enrollmentStatus: 'ACTIVE',
};

export const sampleWithPartialData: IEnrollment = {
  id: 2,
  enrollmentStatus: 'REJECTED',
  lastActivityAt: dayjs('2024-05-19T14:05'),
};

export const sampleWithFullData: IEnrollment = {
  id: 14638,
  enrollmentStatus: 'REJECTED',
  lastActivityAt: dayjs('2024-05-19T19:29'),
  enrollmentDate: dayjs('2024-05-19T15:14'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'REJECTED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
