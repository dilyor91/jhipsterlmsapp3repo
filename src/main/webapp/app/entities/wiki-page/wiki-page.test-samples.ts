import dayjs from 'dayjs/esm';

import { IWikiPage, NewWikiPage } from './wiki-page.model';

export const sampleWithRequiredData: IWikiPage = {
  id: 31327,
};

export const sampleWithPartialData: IWikiPage = {
  id: 12621,
  addToStudents: true,
};

export const sampleWithFullData: IWikiPage = {
  id: 12216,
  title: 'around unlike roll',
  content: 'shelter pedestrianize or',
  whoAllowed: 'ANYONE',
  addToStudents: false,
  addToStudentsDate: dayjs('2024-05-22T19:06'),
  publishedAt: dayjs('2024-05-22T14:28'),
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
