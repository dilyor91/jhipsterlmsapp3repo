import dayjs from 'dayjs/esm';

import { IWikiPage, NewWikiPage } from './wiki-page.model';

export const sampleWithRequiredData: IWikiPage = {
  id: 25191,
};

export const sampleWithPartialData: IWikiPage = {
  id: 27939,
  title: 'milk ample',
  notifyUsersChanges: true,
};

export const sampleWithFullData: IWikiPage = {
  id: 7108,
  title: 'but geez',
  content: 'extremely thunder modern',
  whoAllowed: 'ONLY_TEACHERS',
  addToStudents: false,
  addToStudentsDate: dayjs('2024-05-22T05:56'),
  publishedAt: dayjs('2024-05-22T22:11'),
  published: true,
  notifyUsersChanges: false,
};

export const sampleWithNewData: NewWikiPage = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
