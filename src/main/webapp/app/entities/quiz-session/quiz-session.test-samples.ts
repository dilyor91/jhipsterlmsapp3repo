import dayjs from 'dayjs/esm';

import { IQuizSession, NewQuizSession } from './quiz-session.model';

export const sampleWithRequiredData: IQuizSession = {
  id: 24666,
};

export const sampleWithPartialData: IQuizSession = {
  id: 24047,
  endTime: dayjs('2024-06-19T11:55'),
  quizSessionEnum: 'FINISHED',
};

export const sampleWithFullData: IQuizSession = {
  id: 11288,
  startTime: dayjs('2024-06-19T17:35'),
  endTime: dayjs('2024-06-19T22:02'),
  quizSessionEnum: 'IN_PROGRESS',
};

export const sampleWithNewData: NewQuizSession = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
