import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 24574,
  title: 'politely abaft',
  content: 'grouchy',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 15776,
  title: 'massacre',
  content: 'pointless tart speedily',
  attachmentId: 19410,
  postAt: dayjs('2024-05-20T08:30'),
};

export const sampleWithFullData: IAnnouncement = {
  id: 29672,
  title: 'ew',
  content: 'self-reliant phrasing',
  attachmentId: 21067,
  delayPost: false,
  postAt: dayjs('2024-05-20T03:27'),
  published: true,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'ack',
  content: 'rugby gah',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
