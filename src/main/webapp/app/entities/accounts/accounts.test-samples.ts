import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 29232,
  username: 'morph suspicious',
  fullName: 'nationalize bank commute',
  sortableName: 'wherever midden common',
  phone: '(325) 549-9608 x93202',
  gender: 'pro secure since',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
};

export const sampleWithPartialData: IAccounts = {
  id: 28793,
  username: 'under key cannon',
  fullName: 'carpet brr',
  sortableName: 'instrument instead overlooked',
  avatarImageUrl: 'firm chivvy unusual',
  phone: '(741) 896-8771 x66018',
  locale: 'quick-witted',
  gender: 'late amid look',
  userType: 'STUDENT',
  userStatus: 'PENDING',
};

export const sampleWithFullData: IAccounts = {
  id: 6731,
  username: 'quietly',
  fullName: 'famously scarcely pfft',
  sortableName: 'veldt abaft',
  avatarImageUrl: 'vice ack whoever',
  phone: '1-561-301-4012 x1995',
  locale: 'utilisation',
  gender: 'vol mmm',
  userType: 'TEACHER',
  userStatus: 'BLOCKED',
};

export const sampleWithNewData: NewAccounts = {
  username: 'avaricious out',
  fullName: 'abscond uh-huh after',
  sortableName: 'anxiously exactly',
  phone: '(874) 982-0916 x693',
  gender: 'cruelly',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
