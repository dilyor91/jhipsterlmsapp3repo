import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 30389,
  title: 'blindly',
  content: 'boohoo happily fate',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 10415,
  title: 'quizzical afore psst',
  content: 'badger compel',
  attachmentId: 13411,
  published: false,
};

export const sampleWithFullData: IAnnouncement = {
  id: 529,
  title: 'behind yahoo svelte',
  content: 'proud supposing',
  attachmentId: 30909,
  delayPost: true,
  postAt: dayjs('2024-05-19T17:07'),
  published: false,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'ragged partially',
  content: 'woot fast demarcate',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
