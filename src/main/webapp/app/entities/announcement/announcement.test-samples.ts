import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 15546,
  title: 'rehospitalisation',
  content: 'oh',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 13601,
  title: 'whoa',
  content: 'aha',
  postAt: dayjs('2024-05-19T19:25'),
  published: false,
};

export const sampleWithFullData: IAnnouncement = {
  id: 21562,
  title: 'tired deserted',
  content: 'out fringe',
  attachmentId: 13058,
  delayPost: false,
  postAt: dayjs('2024-05-20T05:23'),
  published: false,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'through',
  content: 'warmly misunderstand',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
