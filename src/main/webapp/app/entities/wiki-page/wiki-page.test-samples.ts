import dayjs from 'dayjs/esm';

import { IWikiPage, NewWikiPage } from './wiki-page.model';

export const sampleWithRequiredData: IWikiPage = {
  id: 1669,
};

export const sampleWithPartialData: IWikiPage = {
  id: 7301,
  title: 'geez department',
  addToStudents: false,
  addToStudentsDate: dayjs('2024-05-22T14:46'),
  notifyUsersChanges: true,
};

export const sampleWithFullData: IWikiPage = {
  id: 25876,
  title: 'sharply aboard yowza',
  content: 'among',
  whoAllowed: 'TEACHER_AND_STUDENTS',
  addToStudents: true,
  addToStudentsDate: dayjs('2024-05-22T19:53'),
  publishedAt: dayjs('2024-05-23T01:15'),
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
