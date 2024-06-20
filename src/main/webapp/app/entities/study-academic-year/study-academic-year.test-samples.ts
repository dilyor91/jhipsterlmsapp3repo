import dayjs from 'dayjs/esm';

import { IStudyAcademicYear, NewStudyAcademicYear } from './study-academic-year.model';

export const sampleWithRequiredData: IStudyAcademicYear = {
  id: 508,
};

export const sampleWithPartialData: IStudyAcademicYear = {
  id: 14374,
  endDate: dayjs('2024-05-30T23:20'),
};

export const sampleWithFullData: IStudyAcademicYear = {
  id: 25045,
  fromDate: dayjs('2024-05-31T00:14'),
  endDate: dayjs('2024-05-30T10:59'),
};

export const sampleWithNewData: NewStudyAcademicYear = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
