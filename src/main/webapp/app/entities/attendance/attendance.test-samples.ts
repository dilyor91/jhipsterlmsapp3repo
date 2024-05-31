import dayjs from 'dayjs/esm';

import { IAttendance, NewAttendance } from './attendance.model';

export const sampleWithRequiredData: IAttendance = {
  id: 30436,
};

export const sampleWithPartialData: IAttendance = {
  id: 20387,
  attendanceDate: dayjs('2024-05-27T04:37'),
};

export const sampleWithFullData: IAttendance = {
  id: 19714,
  attendanceDate: dayjs('2024-05-27T00:43'),
};

export const sampleWithNewData: NewAttendance = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
