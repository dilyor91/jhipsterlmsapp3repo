import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 15081,
  name: 'eek',
};

export const sampleWithPartialData: IAssignment = {
  id: 27273,
  name: 'glass',
  submissionType: 'ONLINE',
};

export const sampleWithFullData: IAssignment = {
  id: 29071,
  name: 'perfumed rave',
  content: 'curly tense',
  points: 31370.57,
  submissionType: 'PAPER',
  allowedAttempts: 25042,
  startDate: dayjs('2024-05-21T19:11'),
  endDate: dayjs('2024-05-21T23:47'),
  dueDate: dayjs('2024-05-21T13:08'),
  published: false,
};

export const sampleWithNewData: NewAssignment = {
  name: 'instead as',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
