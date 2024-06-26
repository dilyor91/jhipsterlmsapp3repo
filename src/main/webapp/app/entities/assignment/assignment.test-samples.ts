import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 5998,
  name: 'humble',
};

export const sampleWithPartialData: IAssignment = {
  id: 28617,
  name: 'geez worn scarcely',
  submissionType: 'ONLINE',
  allowedAttempts: 12111,
  dueDate: dayjs('2024-05-22T01:52'),
  published: true,
};

export const sampleWithFullData: IAssignment = {
  id: 7997,
  name: 'loud bitterly save',
  content: 'careless',
  points: 23779.71,
  submissionType: 'PAPER',
  allowedAttempts: 31486,
  startDate: dayjs('2024-05-21T21:26'),
  endDate: dayjs('2024-05-21T17:31'),
  dueDate: dayjs('2024-05-21T11:43'),
  published: false,
};

export const sampleWithNewData: NewAssignment = {
  name: 'along apud embellishment',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
