import dayjs from 'dayjs/esm';

import { IWikiPage, NewWikiPage } from './wiki-page.model';

export const sampleWithRequiredData: IWikiPage = {
  id: 19570,
};

export const sampleWithPartialData: IWikiPage = {
  id: 15618,
  whoAllowed: 'TEACHER_AND_STUDENTS',
  publishedAt: dayjs('2024-05-23T03:47'),
  published: false,
};

export const sampleWithFullData: IWikiPage = {
  id: 19625,
  title: 'lively educated kind',
  content: 'nicety invade departure',
  whoAllowed: 'ANYONE',
  addToStudents: false,
  addToStudentsDate: dayjs('2024-05-22T14:28'),
  publishedAt: dayjs('2024-05-22T13:15'),
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
