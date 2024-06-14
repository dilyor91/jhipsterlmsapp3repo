import dayjs from 'dayjs/esm';

import { IAttendance, NewAttendance } from './attendance.model';

export const sampleWithRequiredData: IAttendance = {
  id: 31219,
};

export const sampleWithPartialData: IAttendance = {
  id: 11444,
};

export const sampleWithFullData: IAttendance = {
  id: 27311,
  attendanceDate: dayjs('2024-05-27T07:51'),
};

export const sampleWithNewData: NewAttendance = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
