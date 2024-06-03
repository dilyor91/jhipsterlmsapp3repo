import dayjs from 'dayjs/esm';

import { IAttendance, NewAttendance } from './attendance.model';

export const sampleWithRequiredData: IAttendance = {
  id: 2328,
};

export const sampleWithPartialData: IAttendance = {
  id: 30197,
  attendanceDate: dayjs('2024-05-27T04:21'),
};

export const sampleWithFullData: IAttendance = {
  id: 12666,
  attendanceDate: dayjs('2024-05-27T01:53'),
};

export const sampleWithNewData: NewAttendance = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
