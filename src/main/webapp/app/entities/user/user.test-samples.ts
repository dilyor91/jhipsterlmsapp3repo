import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 11983,
  login: 'Pnf_',
};

export const sampleWithPartialData: IUser = {
  id: 8369,
  login: 'FbJ9k@2F',
};

export const sampleWithFullData: IUser = {
  id: 16276,
  login: 'S.',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
