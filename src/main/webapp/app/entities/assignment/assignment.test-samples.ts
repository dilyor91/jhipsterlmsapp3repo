import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 16821,
  name: 'given pro positively',
};

export const sampleWithPartialData: IAssignment = {
  id: 2143,
  name: 'micronutrient miniature ick',
  points: 4106.12,
  allowedAttempts: 21471,
};

export const sampleWithFullData: IAssignment = {
  id: 4604,
  name: 'gripping hmph',
  content: 'unblock bladder instead',
  points: 12890.94,
  submissionType: 'ONLINE',
  allowedAttempts: 5862,
  startDate: dayjs('2024-05-22T02:01'),
  endDate: dayjs('2024-05-21T09:11'),
  dueDate: dayjs('2024-05-21T05:19'),
  published: false,
};

export const sampleWithNewData: NewAssignment = {
  name: 'out as boohoo',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
