import { IAttendanceDetail, NewAttendanceDetail } from './attendance-detail.model';

export const sampleWithRequiredData: IAttendanceDetail = {
  id: 10864,
};

export const sampleWithPartialData: IAttendanceDetail = {
  id: 24438,
  attendanceEnum: 'UNMARKED',
};

export const sampleWithFullData: IAttendanceDetail = {
  id: 2383,
  attendanceEnum: 'PRESENT',
};

export const sampleWithNewData: NewAttendanceDetail = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
