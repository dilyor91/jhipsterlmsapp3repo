import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 31347,
  login: 'hQ',
};

export const sampleWithPartialData: IUser = {
  id: 12211,
  login: 'Sd1~9|@9pj8\\poEQlGF\\,k\\58Q',
};

export const sampleWithFullData: IUser = {
  id: 31987,
  login: 'U',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
