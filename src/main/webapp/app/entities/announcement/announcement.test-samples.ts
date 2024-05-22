import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 14228,
  title: 'beneath oof cleverly',
  content: 'unimpressively attraction heel',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 20958,
  title: 'abaft spider however',
  content: 'owlishly warp ick',
  delayPost: true,
  postAt: dayjs('2024-05-19T19:42'),
};

export const sampleWithFullData: IAnnouncement = {
  id: 30452,
  title: 'why',
  content: 'notwithstanding',
  attachmentId: 17087,
  delayPost: true,
  postAt: dayjs('2024-05-20T09:00'),
  published: false,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'teem',
  content: 'intently inasmuch',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
