import dayjs from 'dayjs/esm';

import { IWikiPage, NewWikiPage } from './wiki-page.model';

export const sampleWithRequiredData: IWikiPage = {
  id: 21651,
};

export const sampleWithPartialData: IWikiPage = {
  id: 8044,
  title: 'eventually astride',
  content: 'promote',
  whoAllowed: 'ONLY_TEACHERS',
};

export const sampleWithFullData: IWikiPage = {
  id: 15954,
  title: 'attachment swift',
  content: 'woot barring indeed',
  whoAllowed: 'ANYONE',
  addToStudents: true,
  addToStudentsDate: dayjs('2024-05-22T21:36'),
  publishedAt: dayjs('2024-05-22T13:23'),
  published: false,
  notifyUsersChanges: true,
};

export const sampleWithNewData: NewWikiPage = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
