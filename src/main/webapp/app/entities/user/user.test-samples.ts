import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 17063,
  login: 'mJnOi@en\\.M\\Xu-Z\\|T\\-B',
};

export const sampleWithPartialData: IUser = {
  id: 16859,
  login: 'FFBCB1',
};

export const sampleWithFullData: IUser = {
  id: 30446,
  login: '_E-',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
