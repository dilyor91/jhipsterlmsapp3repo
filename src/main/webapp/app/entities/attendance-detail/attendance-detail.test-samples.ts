import { IAttendanceDetail, NewAttendanceDetail } from './attendance-detail.model';

export const sampleWithRequiredData: IAttendanceDetail = {
  id: 28863,
};

export const sampleWithPartialData: IAttendanceDetail = {
  id: 16763,
  attendanceEnum: 'PRESENT',
};

export const sampleWithFullData: IAttendanceDetail = {
  id: 17291,
  attendanceEnum: 'LATE',
};

export const sampleWithNewData: NewAttendanceDetail = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
