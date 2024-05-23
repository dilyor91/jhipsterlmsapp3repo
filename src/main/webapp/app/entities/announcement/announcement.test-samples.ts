import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 28362,
  title: 'unethically parched',
  content: 'loyally harvest',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 19566,
  title: 'firewall for indeed',
  content: 'gah',
  attachmentId: 30431,
  postAt: dayjs('2024-05-20T01:24'),
};

export const sampleWithFullData: IAnnouncement = {
  id: 3041,
  title: 'sneaky duh inasmuch',
  content: 'unto segment as',
  attachmentId: 2240,
  delayPost: true,
  postAt: dayjs('2024-05-19T19:25'),
  published: false,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'uh-huh',
  content: 'zowie',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
