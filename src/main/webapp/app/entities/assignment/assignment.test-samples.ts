import dayjs from 'dayjs/esm';

import { IAssignment, NewAssignment } from './assignment.model';

export const sampleWithRequiredData: IAssignment = {
  id: 19288,
  name: 'meh',
};

export const sampleWithPartialData: IAssignment = {
  id: 20530,
  name: 'where meaning',
  content: 'jaggedly',
  endDate: dayjs('2024-05-22T02:53'),
  dueDate: dayjs('2024-05-21T14:53'),
  published: false,
};

export const sampleWithFullData: IAssignment = {
  id: 3821,
  name: 'where yet',
  content: 'enormous',
  points: 29225.34,
  submissionType: 'PAPER',
  allowedAttempts: 31751,
  startDate: dayjs('2024-05-22T03:36'),
  endDate: dayjs('2024-05-21T11:43'),
  dueDate: dayjs('2024-05-22T01:51'),
  published: false,
};

export const sampleWithNewData: NewAssignment = {
  name: 'pillage pish magnify',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
