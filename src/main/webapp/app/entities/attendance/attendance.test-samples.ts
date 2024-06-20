import dayjs from 'dayjs/esm';

import { IAttendance, NewAttendance } from './attendance.model';

export const sampleWithRequiredData: IAttendance = {
  id: 14923,
};

export const sampleWithPartialData: IAttendance = {
  id: 20327,
};

export const sampleWithFullData: IAttendance = {
  id: 23691,
  attendanceDate: dayjs('2024-05-26T10:55'),
};

export const sampleWithNewData: NewAttendance = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
