import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 16721,
  username: 'uniform hmph instead',
  fullName: 'ouch cruelly',
  sortableName: 'hmph',
  phone: '648-458-7964 x15376',
  gender: 'mindless blah opposite',
  userType: 'TEACHER',
  userStatus: 'BLOCKED',
};

export const sampleWithPartialData: IAccounts = {
  id: 8384,
  username: 'muted average but',
  fullName: 'accidentally ack pish',
  sortableName: 'thankfully accompanist',
  phone: '(361) 606-8204 x24889',
  gender: 'horrible',
  userType: 'TEACHER',
  userStatus: 'BLOCKED',
};

export const sampleWithFullData: IAccounts = {
  id: 29265,
  username: 'pace',
  fullName: 'beside even uh-huh',
  sortableName: 'with traduce which',
  avatarImageUrl: 'taut',
  phone: '512.795.2150 x0776',
  locale: 'since',
  gender: 'upbeat manner honeymoon',
  userType: 'STUDENT',
  userStatus: 'ACTIVE',
};

export const sampleWithNewData: NewAccounts = {
  username: 'ew incidentally',
  fullName: 'carefully furthermore bond',
  sortableName: 'wholly behind literature',
  phone: '1-811-856-1331 x020',
  gender: 'briefly',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
