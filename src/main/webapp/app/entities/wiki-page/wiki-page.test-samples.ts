import dayjs from 'dayjs/esm';

import { IWikiPage, NewWikiPage } from './wiki-page.model';

export const sampleWithRequiredData: IWikiPage = {
  id: 22328,
};

export const sampleWithPartialData: IWikiPage = {
  id: 30437,
  addToStudents: false,
  publishedAt: dayjs('2024-05-22T15:20'),
  published: true,
};

export const sampleWithFullData: IWikiPage = {
  id: 26306,
  title: 'reference ouch',
  content: 'ketchup rapidly pace',
  whoAllowed: 'TEACHER_AND_STUDENTS',
  addToStudents: false,
  addToStudentsDate: dayjs('2024-05-22T23:22'),
  publishedAt: dayjs('2024-05-22T07:35'),
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
