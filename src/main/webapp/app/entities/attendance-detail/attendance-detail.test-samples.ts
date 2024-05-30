import { IAttendanceDetail, NewAttendanceDetail } from './attendance-detail.model';

export const sampleWithRequiredData: IAttendanceDetail = {
  id: 3621,
};

export const sampleWithPartialData: IAttendanceDetail = {
  id: 10424,
  attendanceEnum: 'LATE',
};

export const sampleWithFullData: IAttendanceDetail = {
  id: 6634,
  attendanceEnum: 'ABSENT',
};

export const sampleWithNewData: NewAttendanceDetail = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
