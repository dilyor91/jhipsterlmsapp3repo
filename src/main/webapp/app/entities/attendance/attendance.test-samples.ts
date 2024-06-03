import dayjs from 'dayjs/esm';

import { IAttendance, NewAttendance } from './attendance.model';

export const sampleWithRequiredData: IAttendance = {
  id: 5891,
};

export const sampleWithPartialData: IAttendance = {
  id: 15511,
};

export const sampleWithFullData: IAttendance = {
  id: 959,
  attendanceDate: dayjs('2024-05-26T14:49'),
};

export const sampleWithNewData: NewAttendance = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
