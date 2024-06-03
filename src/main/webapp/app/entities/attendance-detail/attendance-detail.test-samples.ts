import { IAttendanceDetail, NewAttendanceDetail } from './attendance-detail.model';

export const sampleWithRequiredData: IAttendanceDetail = {
  id: 2565,
};

export const sampleWithPartialData: IAttendanceDetail = {
  id: 12200,
  attendanceEnum: 'ABSENT',
};

export const sampleWithFullData: IAttendanceDetail = {
  id: 17148,
  attendanceEnum: 'PRESENT',
};

export const sampleWithNewData: NewAttendanceDetail = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
