import dayjs from 'dayjs/esm';

import { IWikiPage, NewWikiPage } from './wiki-page.model';

export const sampleWithRequiredData: IWikiPage = {
  id: 18440,
};

export const sampleWithPartialData: IWikiPage = {
  id: 31119,
  content: 'gosh',
  whoAllowed: 'TEACHER_AND_STUDENTS',
  addToStudentsDate: dayjs('2024-05-22T09:23'),
  publishedAt: dayjs('2024-05-22T08:21'),
};

export const sampleWithFullData: IWikiPage = {
  id: 17920,
  title: 'whose geez percentage',
  content: 'scarification furthermore fooey',
  whoAllowed: 'TEACHER_AND_STUDENTS',
  addToStudents: true,
  addToStudentsDate: dayjs('2024-05-22T21:05'),
  publishedAt: dayjs('2024-05-22T17:01'),
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
