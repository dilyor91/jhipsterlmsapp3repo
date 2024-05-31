import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 660,
  login: 'EmtJY7@1',
};

export const sampleWithPartialData: IUser = {
  id: 16220,
  login: 'h_.yfS',
};

export const sampleWithFullData: IUser = {
  id: 17099,
  login: '8BHm',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
