import { IQuiz, NewQuiz } from './quiz.model';

export const sampleWithRequiredData: IQuiz = {
  id: 2507,
  quizName: 'ugh hospitable ah',
  timeInMinute: 6635,
};

export const sampleWithPartialData: IQuiz = {
  id: 473,
  quizName: 'adapter beancurd',
  timeInMinute: 2708,
  published: false,
};

export const sampleWithFullData: IQuiz = {
  id: 4780,
  quizName: 'ick',
  timeInMinute: 12150,
  published: true,
};

export const sampleWithNewData: NewQuiz = {
  quizName: 'incommode',
  timeInMinute: 1292,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
