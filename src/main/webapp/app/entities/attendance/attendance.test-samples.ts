import dayjs from 'dayjs/esm';

import { IAttendance, NewAttendance } from './attendance.model';

export const sampleWithRequiredData: IAttendance = {
  id: 12371,
};

export const sampleWithPartialData: IAttendance = {
  id: 6148,
};

export const sampleWithFullData: IAttendance = {
  id: 28739,
  attendanceDate: dayjs('2024-05-26T18:52'),
};

export const sampleWithNewData: NewAttendance = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
