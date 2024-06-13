import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 6319,
  title: 'dibble um',
  content: 'ravage',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 20209,
  title: 'inside filter',
  content: 'hence',
};

export const sampleWithFullData: IAnnouncement = {
  id: 23806,
  title: 'table psst steeple',
  content: 'past',
  attachmentId: 12035,
  delayPost: false,
  postAt: dayjs('2024-05-19T13:40'),
  published: false,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'sensibility small',
  content: 'gripe',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
