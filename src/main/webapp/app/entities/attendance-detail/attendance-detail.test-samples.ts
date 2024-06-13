import { IAttendanceDetail, NewAttendanceDetail } from './attendance-detail.model';

export const sampleWithRequiredData: IAttendanceDetail = {
  id: 18254,
};

export const sampleWithPartialData: IAttendanceDetail = {
  id: 18375,
  attendanceEnum: 'LATE',
};

export const sampleWithFullData: IAttendanceDetail = {
  id: 16032,
  attendanceEnum: 'UNMARKED',
};

export const sampleWithNewData: NewAttendanceDetail = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
