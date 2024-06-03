import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 15803,
  username: 'lest',
  fullName: 'queasily voluntarily granola',
  sortableName: 'declassify',
  phone: '1-679-301-0876',
  gender: 'supervisor playwright',
  userType: 'STUDENT',
  userStatus: 'ACTIVE',
};

export const sampleWithPartialData: IAccounts = {
  id: 8213,
  username: 'protection',
  fullName: 'warlike heavenly',
  sortableName: 'gloss',
  phone: '(945) 697-8839 x965',
  gender: 'than why',
  userType: 'TEACHER',
  userStatus: 'PENDING',
};

export const sampleWithFullData: IAccounts = {
  id: 15178,
  username: 'demonise any',
  fullName: 'gosling',
  sortableName: 'useful',
  avatarImageUrl: 'assist ruddy',
  phone: '(661) 266-6292',
  locale: 'immediately wrong unlike',
  gender: 'lined',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithNewData: NewAccounts = {
  username: 'consolidate',
  fullName: 'abnormally',
  sortableName: 'detest required even',
  phone: '297.387.6237 x597',
  gender: 'beside unfortunately',
  userType: 'TEACHER',
  userStatus: 'BLOCKED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
