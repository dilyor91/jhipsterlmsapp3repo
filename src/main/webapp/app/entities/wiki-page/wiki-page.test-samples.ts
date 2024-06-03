import dayjs from 'dayjs/esm';

import { IWikiPage, NewWikiPage } from './wiki-page.model';

export const sampleWithRequiredData: IWikiPage = {
  id: 13100,
};

export const sampleWithPartialData: IWikiPage = {
  id: 22720,
  title: 'arrogantly reproachfully silently',
  whoAllowed: 'TEACHER_AND_STUDENTS',
  addToStudentsDate: dayjs('2024-05-22T21:12'),
  notifyUsersChanges: false,
};

export const sampleWithFullData: IWikiPage = {
  id: 12457,
  title: 'woot vigorous',
  content: 'intuit thrill',
  whoAllowed: 'ANYONE',
  addToStudents: false,
  addToStudentsDate: dayjs('2024-05-22T14:16'),
  publishedAt: dayjs('2024-05-22T23:06'),
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
