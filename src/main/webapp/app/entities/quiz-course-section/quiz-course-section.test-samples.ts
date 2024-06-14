import dayjs from 'dayjs/esm';

import { IQuizCourseSection, NewQuizCourseSection } from './quiz-course-section.model';

export const sampleWithRequiredData: IQuizCourseSection = {
  id: 5266,
  startDate: dayjs('2024-06-13T22:02'),
  endDate: dayjs('2024-06-13T16:26'),
};

export const sampleWithPartialData: IQuizCourseSection = {
  id: 27395,
  startDate: dayjs('2024-06-14T05:41'),
  endDate: dayjs('2024-06-13T22:05'),
};

export const sampleWithFullData: IQuizCourseSection = {
  id: 27719,
  startDate: dayjs('2024-06-13T15:01'),
  endDate: dayjs('2024-06-14T08:55'),
};

export const sampleWithNewData: NewQuizCourseSection = {
  startDate: dayjs('2024-06-14T09:53'),
  endDate: dayjs('2024-06-14T00:47'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
