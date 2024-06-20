import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 25356,
  title: 'ack',
  content: 'yahoo',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 23609,
  title: 'hit',
  content: 'valance lest',
  attachmentId: 2580,
  delayPost: false,
  postAt: dayjs('2024-05-20T03:45'),
};

export const sampleWithFullData: IAnnouncement = {
  id: 30701,
  title: 'incidentally within',
  content: 'what',
  attachmentId: 12834,
  delayPost: false,
  postAt: dayjs('2024-05-20T07:51'),
  published: true,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'ferry limping vase',
  content: 'fooey',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
