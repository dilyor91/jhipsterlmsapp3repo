import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 32,
  username: 'pish rarely slap',
  fullName: 'tax',
  sortableName: 'likable',
  phone: '(599) 411-6927',
  gender: 'esteemed intentional',
  userType: 'TEACHER',
  userStatus: 'PENDING',
};

export const sampleWithPartialData: IAccounts = {
  id: 27823,
  username: 'cooperative dearly',
  fullName: 'whether piercing',
  sortableName: 'warmly',
  avatarImageUrl: 'whereas',
  phone: '(664) 863-3065 x8194',
  gender: 'apud ha',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
};

export const sampleWithFullData: IAccounts = {
  id: 12859,
  username: 'dream',
  fullName: 'whose oblong',
  sortableName: 'border before in',
  avatarImageUrl: 'and and bah',
  phone: '1-367-445-2790 x82633',
  locale: 'decontrol while barrier',
  gender: 'powder tugboat',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithNewData: NewAccounts = {
  username: 'grouchy aw outgrow',
  fullName: 'pulse unto ecclesia',
  sortableName: 'oh brow',
  phone: '477-423-7330 x64423',
  gender: 'gadzooks',
  userType: 'STUDENT',
  userStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
