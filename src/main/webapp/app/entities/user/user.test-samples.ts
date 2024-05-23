import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 3609,
  login: 'YHyfP',
};

export const sampleWithPartialData: IUser = {
  id: 11961,
  login: 'H@f2w\\njHxIa9\\SwmTlIS\\wg3mzXy\\>zTrvm\\;y',
};

export const sampleWithFullData: IUser = {
  id: 279,
  login: '3-v',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
