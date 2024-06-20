import { IOption, NewOption } from './option.model';

export const sampleWithRequiredData: IOption = {
  id: 7069,
  optionText: 'bud twin',
  isCorrect: false,
};

export const sampleWithPartialData: IOption = {
  id: 16744,
  optionText: 'outrageous fear whereas',
  isCorrect: false,
};

export const sampleWithFullData: IOption = {
  id: 3862,
  optionText: 'but politicise wolf',
  isCorrect: true,
};

export const sampleWithNewData: NewOption = {
  optionText: 'buffet overload',
  isCorrect: true,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
