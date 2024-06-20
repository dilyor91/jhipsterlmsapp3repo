import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 28512,
  enrollmentStatus: 'PENDING',
};

export const sampleWithPartialData: IEnrollment = {
  id: 27938,
  enrollmentStatus: 'REJECTED',
  lastActivityAt: dayjs('2024-05-20T03:05'),
};

export const sampleWithFullData: IEnrollment = {
  id: 3997,
  enrollmentStatus: 'PENDING',
  lastActivityAt: dayjs('2024-05-20T09:12'),
  enrollmentDate: dayjs('2024-05-19T18:12'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'PENDING',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
