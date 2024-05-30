import dayjs from 'dayjs/esm';

import { IWikiPage, NewWikiPage } from './wiki-page.model';

export const sampleWithRequiredData: IWikiPage = {
  id: 29569,
};

export const sampleWithPartialData: IWikiPage = {
  id: 11415,
  addToStudents: true,
  addToStudentsDate: dayjs('2024-05-23T02:11'),
  published: false,
  notifyUsersChanges: false,
};

export const sampleWithFullData: IWikiPage = {
  id: 20214,
  title: 'enormous helpfully under',
  content: 'boo capital',
  whoAllowed: 'TEACHER_AND_STUDENTS',
  addToStudents: true,
  addToStudentsDate: dayjs('2024-05-22T14:00'),
  publishedAt: dayjs('2024-05-22T07:11'),
  published: true,
  notifyUsersChanges: true,
};

export const sampleWithNewData: NewWikiPage = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
