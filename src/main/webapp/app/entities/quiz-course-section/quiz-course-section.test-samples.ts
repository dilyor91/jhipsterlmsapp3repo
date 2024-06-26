import dayjs from 'dayjs/esm';

import { IQuizCourseSection, NewQuizCourseSection } from './quiz-course-section.model';

export const sampleWithRequiredData: IQuizCourseSection = {
  id: 5804,
  startDate: dayjs('2024-06-14T09:40'),
  endDate: dayjs('2024-06-13T19:23'),
};

export const sampleWithPartialData: IQuizCourseSection = {
  id: 11678,
  startDate: dayjs('2024-06-13T18:07'),
  endDate: dayjs('2024-06-14T07:58'),
};

export const sampleWithFullData: IQuizCourseSection = {
  id: 748,
  startDate: dayjs('2024-06-13T18:57'),
  endDate: dayjs('2024-06-13T21:56'),
};

export const sampleWithNewData: NewQuizCourseSection = {
  startDate: dayjs('2024-06-13T15:17'),
  endDate: dayjs('2024-06-14T10:31'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
