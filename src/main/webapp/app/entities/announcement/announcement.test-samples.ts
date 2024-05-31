import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 19882,
  title: 'colloquy thaw',
  content: 'reintroduce whereas so',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 32598,
  title: 'upon',
  content: 'watery',
  attachmentId: 8244,
  delayPost: true,
  postAt: dayjs('2024-05-19T18:33'),
  published: true,
};

export const sampleWithFullData: IAnnouncement = {
  id: 31910,
  title: 'incidentally nice forenenst',
  content: 'nimble',
  attachmentId: 18267,
  delayPost: false,
  postAt: dayjs('2024-05-20T09:24'),
  published: true,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'as save',
  content: 'empty geez broach',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
