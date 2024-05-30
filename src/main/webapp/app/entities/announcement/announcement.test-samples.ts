import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 7707,
  title: 'overconfidently muck',
  content: 'rip rotating',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 10498,
  title: 'instead',
  content: 'inasmuch',
  delayPost: false,
  postAt: dayjs('2024-05-20T01:24'),
  published: false,
};

export const sampleWithFullData: IAnnouncement = {
  id: 18075,
  title: 'gadzooks painfully aside',
  content: 'meld before now',
  attachmentId: 22875,
  delayPost: false,
  postAt: dayjs('2024-05-20T12:31'),
  published: true,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'hopelessly before',
  content: 'asterisk never',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
