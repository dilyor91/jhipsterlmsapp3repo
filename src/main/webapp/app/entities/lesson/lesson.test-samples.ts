import dayjs from 'dayjs/esm';

import { ILesson, NewLesson } from './lesson.model';

export const sampleWithRequiredData: ILesson = {
  id: 10713,
  lessonTitle: 'acid even pro',
  startPlanDate: dayjs('2024-06-26T05:00'),
  lessonType: 'Lecture',
};

export const sampleWithPartialData: ILesson = {
  id: 25376,
  lessonTitle: 'derivative',
  startPlanDate: dayjs('2024-06-25T17:21'),
  actualLessonDate: dayjs('2024-06-25T16:11'),
  lessonType: 'Seminar',
};

export const sampleWithFullData: ILesson = {
  id: 10722,
  lessonTitle: 'spread',
  startPlanDate: dayjs('2024-06-26T06:30'),
  actualLessonDate: dayjs('2024-06-25T17:37'),
  lessonType: 'Practice',
  videoUrl: 'aim fervently talk',
};

export const sampleWithNewData: NewLesson = {
  lessonTitle: 'clearly beneath',
  startPlanDate: dayjs('2024-06-26T09:33'),
  lessonType: 'Seminar',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
