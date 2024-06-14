import { IOption, NewOption } from './option.model';

export const sampleWithRequiredData: IOption = {
  id: 24777,
  optionText: 'ill never blot',
  isCorrect: false,
};

export const sampleWithPartialData: IOption = {
  id: 15511,
  optionText: 'unlined',
  isCorrect: true,
};

export const sampleWithFullData: IOption = {
  id: 17109,
  optionText: 'ball kindly',
  isCorrect: true,
};

export const sampleWithNewData: NewOption = {
  optionText: 'wherever',
  isCorrect: true,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
