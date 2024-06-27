import { IAttendance, NewAttendance } from './attendance.model';

export const sampleWithRequiredData: IAttendance = {
  id: 9752,
};

export const sampleWithPartialData: IAttendance = {
  id: 17722,
  attendanceEnum: 'LATE',
};

export const sampleWithFullData: IAttendance = {
  id: 18243,
  attendanceEnum: 'ABSENT',
};

export const sampleWithNewData: NewAttendance = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
