import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 12472,
  login: '5u@8twEr\\~Ax\\%YO9j',
};

export const sampleWithPartialData: IUser = {
  id: 9704,
  login: '.',
};

export const sampleWithFullData: IUser = {
  id: 5649,
  login: 'cn',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
