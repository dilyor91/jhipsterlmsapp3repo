import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 6633,
  username: 'or',
  fullName: 'even quizzically enhance',
  sortableName: 'excepting tinker',
  phone: '813-886-0979 x75214',
  gender: 'lopsided forenenst',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithPartialData: IAccounts = {
  id: 247,
  username: 'of cautiously likewise',
  fullName: 'querulous good-natured once',
  sortableName: 'intrepid scared tire',
  avatarImageUrl: 'but allowance',
  phone: '430.800.9404 x188',
  gender: 'bright ack',
  userType: 'STUDENT',
  userStatus: 'PENDING',
};

export const sampleWithFullData: IAccounts = {
  id: 24588,
  username: 'a',
  fullName: 'sadly glass',
  sortableName: 'snug',
  avatarImageUrl: 'unto',
  phone: '575-371-4682 x43422',
  locale: 'thread',
  gender: 'sturdy dumbfound intermesh',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithNewData: NewAccounts = {
  username: 'uh-huh',
  fullName: 'marvelous loudly when',
  sortableName: 'ugh',
  phone: '359-250-9925',
  gender: 'huzzah clank mmm',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
