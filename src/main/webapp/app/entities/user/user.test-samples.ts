import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 101,
  login: 'K',
};

export const sampleWithPartialData: IUser = {
  id: 23611,
  login: 'EgQSQU',
};

export const sampleWithFullData: IUser = {
  id: 10252,
  login: 'd&!@f6\\/N8dL\\mwUuL\\i6NA5Kl\\zEdO9k',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
