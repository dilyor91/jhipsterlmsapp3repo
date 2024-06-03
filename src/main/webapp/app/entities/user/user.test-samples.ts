import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 31165,
  login: 'otpys',
};

export const sampleWithPartialData: IUser = {
  id: 1528,
  login: '|@CHOC\\cCGJR\\mV33-s\\z-FLRbA\\ghuKa',
};

export const sampleWithFullData: IUser = {
  id: 21778,
  login: 'ZnVn',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
