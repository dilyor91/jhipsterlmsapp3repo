import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 30872,
  name: 'contrail um',
};

export const sampleWithPartialData: IAssignment = {
  id: 3569,
  name: 'boohoo advantage',
  submissionType: 'ONLINE',
  endDate: dayjs('2024-05-21T21:30'),
  dueDate: dayjs('2024-05-21T23:42'),
};

export const sampleWithFullData: IAssignment = {
  id: 25038,
  name: 'yahoo',
  content: 'reflecting loud lest',
  points: 13013.43,
  submissionType: 'PAPER',
  allowedAttempts: 20771,
  startDate: dayjs('2024-05-21T19:45'),
  endDate: dayjs('2024-05-21T15:43'),
  dueDate: dayjs('2024-05-21T10:11'),
  published: true,
};

export const sampleWithNewData: NewAssignment = {
  name: 'past however',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
