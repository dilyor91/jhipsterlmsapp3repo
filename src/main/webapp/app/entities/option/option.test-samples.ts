import { IOption, NewOption } from './option.model';

export const sampleWithRequiredData: IOption = {
  id: 553,
  optionText: 'preference always cheater',
  isCorrect: true,
};

export const sampleWithPartialData: IOption = {
  id: 30647,
  optionText: 'cathedral notion',
  isCorrect: true,
};

export const sampleWithFullData: IOption = {
  id: 30361,
  optionText: 'muffle',
  isCorrect: false,
};

export const sampleWithNewData: NewOption = {
  optionText: 'incommode before',
  isCorrect: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
