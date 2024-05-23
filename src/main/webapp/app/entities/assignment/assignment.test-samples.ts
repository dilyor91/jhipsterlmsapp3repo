import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 17618,
  name: 'psst overload dimpled',
};

export const sampleWithPartialData: IAssignment = {
  id: 2881,
  name: 'diligently',
  content: 'whenever attached unless',
  points: 31196.51,
  submissionType: 'ONLINE',
  published: false,
};

export const sampleWithFullData: IAssignment = {
  id: 15159,
  name: 'enthusiastically',
  content: 'near',
  points: 21603.68,
  submissionType: 'PAPER',
  allowedAttempts: 15135,
  startDate: dayjs('2024-05-21T14:31'),
  endDate: dayjs('2024-05-21T12:41'),
  dueDate: dayjs('2024-05-21T23:48'),
  published: true,
};

export const sampleWithNewData: NewAssignment = {
  name: 'wilted boohoo ugh',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
