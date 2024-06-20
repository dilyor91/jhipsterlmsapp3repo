import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 18311,
  login: '7VhD9z@xhi\\6Vl\\Jz7J\\Rp\\kwgD8sn',
};

export const sampleWithPartialData: IUser = {
  id: 26707,
  login: 'Wzi',
};

export const sampleWithFullData: IUser = {
  id: 12417,
  login: 'Pg',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
