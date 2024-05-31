import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 26881,
  username: 'enormously',
  fullName: 'pension jubilantly soybean',
  sortableName: 'zowie drat',
  phone: '1-419-312-7005 x01176',
  gender: 'overcooked relate humongous',
  userType: 'TEACHER',
  userStatus: 'BLOCKED',
};

export const sampleWithPartialData: IAccounts = {
  id: 19389,
  username: 'cable',
  fullName: 'owlishly upward before',
  sortableName: 'scarily',
  avatarImageUrl: 'gynaecology daily',
  phone: '1-987-723-2483 x0381',
  locale: 'gosh before',
  gender: 'ha cart promptly',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithFullData: IAccounts = {
  id: 12861,
  username: 'never yuck unrealistic',
  fullName: 'around',
  sortableName: 'disclaim',
  avatarImageUrl: 'joshingly gracious swat',
  phone: '(794) 785-5460 x126',
  locale: 'gee',
  gender: 'fooey yahoo',
  userType: 'STUDENT',
  userStatus: 'PENDING',
};

export const sampleWithNewData: NewAccounts = {
  username: 'quoth divert medium',
  fullName: 'yahoo sigh',
  sortableName: 'following aside',
  phone: '(867) 758-1111 x88302',
  gender: 'fresh',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
