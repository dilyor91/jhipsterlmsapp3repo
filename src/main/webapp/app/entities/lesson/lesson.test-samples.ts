import dayjs from 'dayjs/esm';

import { ILesson, NewLesson } from './lesson.model';

export const sampleWithRequiredData: ILesson = {
  id: 9349,
  lessonTitle: 'quadruple via creek',
  startPlanDate: dayjs('2024-06-25T20:31'),
  lessonType: 'Practice',
};

export const sampleWithPartialData: ILesson = {
  id: 7058,
  lessonTitle: 'enthusiastically',
  startPlanDate: dayjs('2024-06-25T21:36'),
  lessonType: 'Practice',
  videoUrl: 'after',
};

export const sampleWithFullData: ILesson = {
  id: 5291,
  lessonTitle: 'wetly aim fervently',
  startPlanDate: dayjs('2024-06-25T21:42'),
  actualLessonDate: dayjs('2024-06-26T00:12'),
  lessonType: 'Lecture',
  videoUrl: 'huzzah frankly',
};

export const sampleWithNewData: NewLesson = {
  lessonTitle: 'and',
  startPlanDate: dayjs('2024-06-26T04:01'),
  lessonType: 'Practice',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
