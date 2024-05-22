import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 21987,
  login: 'aEaL',
};

export const sampleWithPartialData: IUser = {
  id: 4049,
  login: 'j',
};

export const sampleWithFullData: IUser = {
  id: 22560,
  login: 'TPQE@8\\Fok1H9\\W5HZ',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
