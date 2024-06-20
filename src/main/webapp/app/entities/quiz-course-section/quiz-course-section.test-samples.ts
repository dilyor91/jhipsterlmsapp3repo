import dayjs from 'dayjs/esm';

import { IQuizCourseSection, NewQuizCourseSection } from './quiz-course-section.model';

export const sampleWithRequiredData: IQuizCourseSection = {
  id: 105,
  startDate: dayjs('2024-06-13T16:28'),
  endDate: dayjs('2024-06-13T13:52'),
};

export const sampleWithPartialData: IQuizCourseSection = {
  id: 16611,
  startDate: dayjs('2024-06-13T11:23'),
  endDate: dayjs('2024-06-13T21:55'),
};

export const sampleWithFullData: IQuizCourseSection = {
  id: 20830,
  startDate: dayjs('2024-06-14T02:08'),
  endDate: dayjs('2024-06-14T01:56'),
};

export const sampleWithNewData: NewQuizCourseSection = {
  startDate: dayjs('2024-06-13T20:16'),
  endDate: dayjs('2024-06-14T08:08'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
