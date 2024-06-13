import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 24653,
  username: 'watery',
  fullName: 'forenenst',
  sortableName: 'since',
  phone: '857.945.9430',
  gender: 'throughout shy',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithPartialData: IAccounts = {
  id: 9652,
  username: 'gosh salute oil',
  fullName: 'inasmuch abaft along',
  sortableName: 'whether',
  avatarImageUrl: 'sans closely',
  phone: '983-632-9079 x6019',
  locale: 'early',
  gender: 'soot',
  userType: 'STUDENT',
  userStatus: 'ACTIVE',
};

export const sampleWithFullData: IAccounts = {
  id: 2314,
  username: 'beside',
  fullName: 'joshingly minus',
  sortableName: 'advertising',
  avatarImageUrl: 'cultivated honoree beneath',
  phone: '372.875.4309 x102',
  locale: 'variable angrily atop',
  gender: 'even shiny hm',
  userType: 'TEACHER',
  userStatus: 'PENDING',
};

export const sampleWithNewData: NewAccounts = {
  username: 'minus vainly',
  fullName: 'once all involvement',
  sortableName: 'aha',
  phone: '(830) 269-7014',
  gender: 'product quicker hmph',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
