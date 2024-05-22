import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 18712,
  username: 'zesty',
  fullName: 'acceptance',
  sortableName: 'usher',
  phone: '903-331-8890',
  gender: 'destruction cartwheel evangelise',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
};

export const sampleWithPartialData: IAccounts = {
  id: 15873,
  username: 'retaliate while oof',
  fullName: 'bless roughly tarragon',
  sortableName: 'anti',
  phone: '1-938-600-8187',
  locale: 'rich until',
  gender: 'phooey',
  userType: 'TEACHER',
  userStatus: 'PENDING',
};

export const sampleWithFullData: IAccounts = {
  id: 7485,
  username: 'quaint mmm supersize',
  fullName: 'moisturize',
  sortableName: 'church',
  avatarImageUrl: 'sharply',
  phone: '(844) 616-5996 x749',
  locale: 'harmful hatchling soliloquize',
  gender: 'incidentally whose',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
};

export const sampleWithNewData: NewAccounts = {
  username: 'provided',
  fullName: 'obediently onto geez',
  sortableName: 'boohoo nucleotide upliftingly',
  phone: '494.563.0435 x727',
  gender: 'accessorize',
  userType: 'TEACHER',
  userStatus: 'BLOCKED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
