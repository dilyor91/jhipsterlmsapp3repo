import { IQuiz, NewQuiz } from './quiz.model';

export const sampleWithRequiredData: IQuiz = {
  id: 2943,
  quizName: 'what under inasmuch',
  timeInMinute: 1827,
};

export const sampleWithPartialData: IQuiz = {
  id: 32394,
  quizName: 'emblazon',
  timeInMinute: 3213,
  published: true,
};

export const sampleWithFullData: IQuiz = {
  id: 31431,
  quizName: 'till meme',
  timeInMinute: 13335,
  published: false,
};

export const sampleWithNewData: NewQuiz = {
  quizName: 'what gym',
  timeInMinute: 4034,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
