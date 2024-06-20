import dayjs from 'dayjs/esm';

import { IQuizSession, NewQuizSession } from './quiz-session.model';

export const sampleWithRequiredData: IQuizSession = {
  id: 30075,
};

export const sampleWithPartialData: IQuizSession = {
  id: 24026,
  endTime: dayjs('2024-06-19T08:36'),
  quizSessionEnum: 'IN_PROGRESS',
};

export const sampleWithFullData: IQuizSession = {
  id: 17218,
  startTime: dayjs('2024-06-19T07:18'),
  endTime: dayjs('2024-06-19T09:40'),
  quizSessionEnum: 'FINISHED',
};

export const sampleWithNewData: NewQuizSession = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
