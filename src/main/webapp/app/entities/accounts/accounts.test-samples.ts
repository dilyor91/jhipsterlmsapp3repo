import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 7160,
  username: 'grimace',
  fullName: 'among unconscious if',
  sortableName: 'now insignificant',
  phone: '1-700-841-0568 x042',
  gender: 'incidentally seemingly',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithPartialData: IAccounts = {
  id: 30040,
  username: 'barium naturally lest',
  fullName: 'instead after whoever',
  sortableName: 'wholesaler amongst ha',
  avatarImageUrl: 'huzzah',
  phone: '470-255-5077',
  gender: 'geez',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
};

export const sampleWithFullData: IAccounts = {
  id: 17515,
  username: 'upsell',
  fullName: 'upwardly deluge',
  sortableName: 'dependable knottily',
  avatarImageUrl: 'apropos cruelly antagonise',
  phone: '373.353.4007',
  locale: 'tightly',
  gender: 'negative amused',
  userType: 'TEACHER',
  userStatus: 'ACTIVE',
};

export const sampleWithNewData: NewAccounts = {
  username: 'although',
  fullName: 'more wherever supposing',
  sortableName: 'who righteously ack',
  phone: '974-438-9932',
  gender: 'round limit throughout',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
