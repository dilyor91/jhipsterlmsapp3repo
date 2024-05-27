import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 30905,
  name: 'before pursuit',
};

export const sampleWithPartialData: IAssignment = {
  id: 11938,
  name: 'apud down',
  points: 1607.63,
  submissionType: 'PAPER',
  allowedAttempts: 24704,
};

export const sampleWithFullData: IAssignment = {
  id: 17715,
  name: 'though cane mechanically',
  content: 'wok',
  points: 6811.78,
  submissionType: 'ONLINE',
  allowedAttempts: 5669,
  startDate: dayjs('2024-05-22T04:59'),
  endDate: dayjs('2024-05-21T08:19'),
  dueDate: dayjs('2024-05-22T05:10'),
  published: true,
};

export const sampleWithNewData: NewAssignment = {
  name: 'yum',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
