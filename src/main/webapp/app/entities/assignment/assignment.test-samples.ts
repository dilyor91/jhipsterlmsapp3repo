import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 24570,
  name: 'um',
};

export const sampleWithPartialData: IAssignment = {
  id: 14967,
  name: 'cleverly amalgamate disguise',
  content: 'coordinated apropos flatten',
  points: 5597,
  submissionType: 'ONLINE',
  startDate: dayjs('2024-05-21T16:02'),
  endDate: dayjs('2024-05-21T12:59'),
  published: true,
};

export const sampleWithFullData: IAssignment = {
  id: 906,
  name: 'negative',
  content: 'after taste',
  points: 23295.39,
  submissionType: 'PAPER',
  allowedAttempts: 6055,
  startDate: dayjs('2024-05-22T03:03'),
  endDate: dayjs('2024-05-21T18:34'),
  dueDate: dayjs('2024-05-21T12:05'),
  published: false,
};

export const sampleWithNewData: NewAssignment = {
  name: 'ha duh via',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
