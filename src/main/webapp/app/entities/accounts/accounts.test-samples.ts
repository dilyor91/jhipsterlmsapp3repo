import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 11765,
  username: 'among',
  fullName: 'grocery',
  sortableName: 'villainous cue',
  phone: '1-267-903-4459 x96826',
  gender: 'delicious',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithPartialData: IAccounts = {
  id: 27131,
  username: 'as near er',
  fullName: 'noted',
  sortableName: 'once beside even',
  avatarImageUrl: 'heartache fooey',
  phone: '1-507-338-2788 x29537',
  gender: 'cultivar tenderly',
  userType: 'STUDENT',
  userStatus: 'ACTIVE',
};

export const sampleWithFullData: IAccounts = {
  id: 8136,
  username: 'nifty',
  fullName: 'upon wealthy',
  sortableName: 'scan finally belittle',
  avatarImageUrl: 'deliberately',
  phone: '1-451-791-1474 x22878',
  locale: 'retrospective wetly barring',
  gender: 'platinum deadly',
  userType: 'STUDENT',
  userStatus: 'ACTIVE',
};

export const sampleWithNewData: NewAccounts = {
  username: 'fooey',
  fullName: 'healthily',
  sortableName: 'hightail inasmuch',
  phone: '1-200-256-8034 x0212',
  gender: 'before miserably',
  userType: 'STUDENT',
  userStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
