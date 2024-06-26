import { IQuiz, NewQuiz } from './quiz.model';

export const sampleWithRequiredData: IQuiz = {
  id: 29323,
  quizName: 'ew deliberately onto',
  timeInMinute: 11964,
};

export const sampleWithPartialData: IQuiz = {
  id: 6233,
  quizName: 'hm clown till',
  timeInMinute: 30882,
  published: false,
};

export const sampleWithFullData: IQuiz = {
  id: 20243,
  quizName: 'supersede extraneous vaulting',
  timeInMinute: 694,
  published: false,
};

export const sampleWithNewData: NewQuiz = {
  quizName: 'towards',
  timeInMinute: 2123,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
