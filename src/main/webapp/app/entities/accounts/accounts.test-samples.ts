import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 14975,
  username: 'contention furthermore',
  fullName: 'atop weekly weakly',
  sortableName: 'pace geez anenst',
  phone: '938.485.7520 x7410',
  gender: 'subscribe even',
  userType: 'STUDENT',
  userStatus: 'ACTIVE',
};

export const sampleWithPartialData: IAccounts = {
  id: 16551,
  username: 'virtuous after',
  fullName: 'judicious heavenly before',
  sortableName: 'worker supposing gee',
  phone: '556.620.3947',
  locale: 'unusual whoever',
  gender: 'around',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
};

export const sampleWithFullData: IAccounts = {
  id: 31159,
  username: 'shyly',
  fullName: 'furthermore vague greatly',
  sortableName: 'but defiantly inasmuch',
  avatarImageUrl: 'though pfft homonym',
  phone: '(664) 975-1985 x150',
  locale: 'soprano',
  gender: 'astride tilt',
  userType: 'TEACHER',
  userStatus: 'PENDING',
};

export const sampleWithNewData: NewAccounts = {
  username: 'bank cooperative gee',
  fullName: 'about whether',
  sortableName: 'phooey',
  phone: '(356) 527-9022 x3386',
  gender: 'proctor',
  userType: 'TEACHER',
  userStatus: 'PENDING',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
