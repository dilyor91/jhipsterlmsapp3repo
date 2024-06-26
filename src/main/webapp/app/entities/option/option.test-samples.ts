import { IOption, NewOption } from './option.model';

export const sampleWithRequiredData: IOption = {
  id: 12735,
  optionText: 'provided next',
  isCorrect: false,
};

export const sampleWithPartialData: IOption = {
  id: 1418,
  optionText: 'gosh boo couple',
  isCorrect: false,
};

export const sampleWithFullData: IOption = {
  id: 27583,
  optionText: 'huzzah wetly pink',
  isCorrect: true,
};

export const sampleWithNewData: NewOption = {
  optionText: 'bin',
  isCorrect: false,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
