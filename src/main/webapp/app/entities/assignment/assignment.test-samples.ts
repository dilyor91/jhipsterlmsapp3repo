import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 13055,
  name: 'interview',
};

export const sampleWithPartialData: IAssignment = {
  id: 11918,
  name: 'yummy behind',
  content: 'antler even psst',
  submissionType: 'PAPER',
  allowedAttempts: 24791,
  published: true,
};

export const sampleWithFullData: IAssignment = {
  id: 28150,
  name: 'beneath atop female',
  content: 'between arrogantly',
  points: 4531.83,
  submissionType: 'ONLINE',
  allowedAttempts: 28386,
  startDate: dayjs('2024-05-21T21:42'),
  endDate: dayjs('2024-05-21T17:46'),
  dueDate: dayjs('2024-05-21T23:18'),
  published: false,
};

export const sampleWithNewData: NewAssignment = {
  name: 'shackle entire',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
