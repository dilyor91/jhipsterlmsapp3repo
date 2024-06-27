import { IAttendanceDetail, NewAttendanceDetail } from './attendance-detail.model';

export const sampleWithRequiredData: IAttendanceDetail = {
  id: 20319,
};

export const sampleWithPartialData: IAttendanceDetail = {
  id: 31815,
};

export const sampleWithFullData: IAttendanceDetail = {
  id: 5511,
  attendanceEnum: 'PRESENT',
};

export const sampleWithNewData: NewAttendanceDetail = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
