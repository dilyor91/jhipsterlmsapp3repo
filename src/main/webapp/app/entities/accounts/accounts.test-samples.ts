import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 23332,
  username: 'portly deadly periodic',
  fullName: 'loftily',
  sortableName: 'phew incidentally queasily',
  phone: '480.220.1222 x6185',
  gender: 'weakly',
  userType: 'TEACHER',
  userStatus: 'PENDING',
};

export const sampleWithPartialData: IAccounts = {
  id: 24879,
  username: 'unless enforce optimistic',
  fullName: 'lawful great banjo',
  sortableName: 'fun whereas',
  avatarImageUrl: 'political stylish',
  phone: '613.666.3546 x9084',
  locale: 'until rudely into',
  gender: 'really vague push',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
};

export const sampleWithFullData: IAccounts = {
  id: 14511,
  username: 'diversity dine keel',
  fullName: 'spirited heartfelt picturesque',
  sortableName: 'freely um meanwhile',
  avatarImageUrl: 'reprint',
  phone: '383-227-0404 x05182',
  locale: 'indeed',
  gender: 'gosh',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
};

export const sampleWithNewData: NewAccounts = {
  username: 'blah kiddingly pleased',
  fullName: 'near advanced',
  sortableName: 'clever premeditation as',
  phone: '1-960-727-1686 x67524',
  gender: 'chance online',
  userType: 'STUDENT',
  userStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
