import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 3068,
  login: 'iY9e@d\\"nmV\\_2T',
};

export const sampleWithPartialData: IUser = {
  id: 16364,
  login: 'uW_ejU',
};

export const sampleWithFullData: IUser = {
  id: 7421,
  login: 'dM',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
