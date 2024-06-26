import dayjs from 'dayjs/esm';

import { IAttendance, NewAttendance } from './attendance.model';

export const sampleWithRequiredData: IAttendance = {
  id: 9752,
};

export const sampleWithPartialData: IAttendance = {
  id: 17722,
  attendanceDate: dayjs('2024-05-26T23:10'),
};

export const sampleWithFullData: IAttendance = {
  id: 18243,
  attendanceDate: dayjs('2024-05-26T11:27'),
};

export const sampleWithNewData: NewAttendance = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
