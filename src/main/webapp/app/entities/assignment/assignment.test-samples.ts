import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 4435,
  name: 'abaft shofar inasmuch',
};

export const sampleWithPartialData: IAssignment = {
  id: 205,
  name: 'bind although leafy',
  content: 'since wholly',
  points: 74.09,
  submissionType: 'ONLINE',
  published: false,
};

export const sampleWithFullData: IAssignment = {
  id: 6710,
  name: 'oof boost inflame',
  content: 'integral traumatic bubble',
  points: 25795.26,
  submissionType: 'ONLINE',
  allowedAttempts: 26166,
  startDate: dayjs('2024-05-21T14:21'),
  endDate: dayjs('2024-05-22T01:24'),
  dueDate: dayjs('2024-05-21T19:19'),
  published: false,
};

export const sampleWithNewData: NewAssignment = {
  name: 'rapidly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
