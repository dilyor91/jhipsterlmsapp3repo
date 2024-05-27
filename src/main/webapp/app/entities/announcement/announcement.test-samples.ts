import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 14900,
  title: 'yum accoutre instinct',
  content: 'challenge oxidize murky',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 19939,
  title: 'instructive wisely wood',
  content: 'despite yearly provided',
  attachmentId: 12698,
  delayPost: true,
  postAt: dayjs('2024-05-20T06:22'),
};

export const sampleWithFullData: IAnnouncement = {
  id: 704,
  title: 'yowza',
  content: 'ouch per',
  attachmentId: 27564,
  delayPost: false,
  postAt: dayjs('2024-05-19T23:04'),
  published: true,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'intently',
  content: 'hence woot however',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
