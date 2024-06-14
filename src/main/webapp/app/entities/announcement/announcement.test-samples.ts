import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 15365,
  title: 'er thankfully provided',
  content: 'actualise ouch',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 17247,
  title: 'impressive',
  content: 'yuck',
  attachmentId: 13575,
  postAt: dayjs('2024-05-20T10:55'),
};

export const sampleWithFullData: IAnnouncement = {
  id: 21181,
  title: 'brr circa how',
  content: 'agree',
  attachmentId: 13732,
  delayPost: false,
  postAt: dayjs('2024-05-19T20:31'),
  published: false,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'constrict alarmed',
  content: 'cautiously who',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
