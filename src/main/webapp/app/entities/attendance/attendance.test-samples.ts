import dayjs from 'dayjs/esm';

import { IAttendance, NewAttendance } from './attendance.model';

export const sampleWithRequiredData: IAttendance = {
  id: 13266,
};

export const sampleWithPartialData: IAttendance = {
  id: 16478,
  attendanceDate: dayjs('2024-05-26T11:33'),
};

export const sampleWithFullData: IAttendance = {
  id: 2904,
  attendanceDate: dayjs('2024-05-27T03:21'),
};

export const sampleWithNewData: NewAttendance = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
