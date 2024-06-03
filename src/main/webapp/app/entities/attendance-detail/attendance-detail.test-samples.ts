import { IAttendanceDetail, NewAttendanceDetail } from './attendance-detail.model';

export const sampleWithRequiredData: IAttendanceDetail = {
  id: 16879,
};

export const sampleWithPartialData: IAttendanceDetail = {
  id: 759,
};

export const sampleWithFullData: IAttendanceDetail = {
  id: 25740,
  attendanceEnum: 'PRESENT',
};

export const sampleWithNewData: NewAttendanceDetail = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
