import { IAttendanceDetail, NewAttendanceDetail } from './attendance-detail.model';

export const sampleWithRequiredData: IAttendanceDetail = {
  id: 20227,
};

export const sampleWithPartialData: IAttendanceDetail = {
  id: 26561,
  attendanceEnum: 'LATE',
};

export const sampleWithFullData: IAttendanceDetail = {
  id: 14760,
  attendanceEnum: 'LATE',
};

export const sampleWithNewData: NewAttendanceDetail = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
