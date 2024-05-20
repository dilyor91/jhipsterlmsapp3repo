import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 18704,
  title: 'bitterly robe',
  content: 'creepy zigzag a',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 16727,
  title: 'deceivingly miserably',
  content: 'cria',
  delayPost: false,
  postAt: dayjs('2024-05-20T00:37'),
};

export const sampleWithFullData: IAnnouncement = {
  id: 19497,
  title: 'as plus',
  content: 'whoever',
  attachmentId: 9369,
  delayPost: false,
  postAt: dayjs('2024-05-19T22:02'),
  published: true,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'rural',
  content: 'boohoo oh break',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
