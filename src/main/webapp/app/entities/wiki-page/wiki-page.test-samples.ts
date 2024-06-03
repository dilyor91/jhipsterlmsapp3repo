import dayjs from 'dayjs/esm';

import { IWikiPage, NewWikiPage } from './wiki-page.model';

export const sampleWithRequiredData: IWikiPage = {
  id: 254,
};

export const sampleWithPartialData: IWikiPage = {
  id: 20337,
  title: 'searchingly gadzooks',
};

export const sampleWithFullData: IWikiPage = {
  id: 26472,
  title: 'tolerate eek',
  content: 'sterilise yippee',
  whoAllowed: 'TEACHER_AND_STUDENTS',
  addToStudents: true,
  addToStudentsDate: dayjs('2024-05-23T02:35'),
  publishedAt: dayjs('2024-05-22T23:19'),
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
