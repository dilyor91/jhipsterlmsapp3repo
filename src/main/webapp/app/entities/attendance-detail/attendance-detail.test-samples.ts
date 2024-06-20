import { IAttendanceDetail, NewAttendanceDetail } from './attendance-detail.model';

export const sampleWithRequiredData: IAttendanceDetail = {
  id: 20710,
};

export const sampleWithPartialData: IAttendanceDetail = {
  id: 5196,
  attendanceEnum: 'ABSENT',
};

export const sampleWithFullData: IAttendanceDetail = {
  id: 7522,
  attendanceEnum: 'LATE',
};

export const sampleWithNewData: NewAttendanceDetail = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
