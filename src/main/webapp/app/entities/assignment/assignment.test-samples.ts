import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 240,
  name: 'absolute',
};

export const sampleWithPartialData: IAssignment = {
  id: 25479,
  name: 'so',
  content: 'although',
  points: 6381.98,
  startDate: dayjs('2024-05-21T06:27'),
  endDate: dayjs('2024-05-21T20:13'),
  published: false,
};

export const sampleWithFullData: IAssignment = {
  id: 1747,
  name: 'chainstay',
  content: 'slim',
  points: 4081.36,
  submissionType: 'ONLINE',
  allowedAttempts: 21914,
  startDate: dayjs('2024-05-21T18:54'),
  endDate: dayjs('2024-05-21T18:51'),
  dueDate: dayjs('2024-05-21T15:22'),
  published: true,
};

export const sampleWithNewData: NewAssignment = {
  name: 'round',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
