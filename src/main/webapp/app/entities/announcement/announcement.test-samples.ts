import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 8762,
  title: 'frisk rightfully',
  content: 'bug melatonin licence',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 25766,
  title: 'round',
  content: 'amid apud instead',
  postAt: dayjs('2024-05-19T21:21'),
  published: true,
};

export const sampleWithFullData: IAnnouncement = {
  id: 22311,
  title: 'ashamed angelic',
  content: 'gadzooks yet',
  attachmentId: 16146,
  delayPost: true,
  postAt: dayjs('2024-05-20T05:56'),
  published: false,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'during deceivingly with',
  content: 'astride',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
