import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 4922,
  name: 'reckless in dimly',
};

export const sampleWithPartialData: IAssignment = {
  id: 19079,
  name: 'victimise',
  points: 24266.99,
  dueDate: dayjs('2024-05-21T07:03'),
  published: true,
};

export const sampleWithFullData: IAssignment = {
  id: 21185,
  name: 'scuttle italicize',
  content: 'soliloquy',
  points: 23379.35,
  submissionType: 'ONLINE',
  allowedAttempts: 30487,
  startDate: dayjs('2024-05-21T09:38'),
  endDate: dayjs('2024-05-21T17:31'),
  dueDate: dayjs('2024-05-21T15:16'),
  published: true,
};

export const sampleWithNewData: NewAssignment = {
  name: 'fake minor',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
