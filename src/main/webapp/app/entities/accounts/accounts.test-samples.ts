import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 22655,
  username: 'hence beautifully uh-huh',
  fullName: 'aw meh amid',
  sortableName: 'beside inaugurate whoever',
  phone: '1-716-865-3881 x8185',
  gender: 'nourishment stick',
  userType: 'TEACHER',
  userStatus: 'BLOCKED',
};

export const sampleWithPartialData: IAccounts = {
  id: 252,
  username: 'sightseeing great-grandfather',
  fullName: 'yowza muddy',
  sortableName: 'regionalism failing',
  avatarImageUrl: 'subsist',
  phone: '588-306-6970 x36143',
  gender: 'importune',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithFullData: IAccounts = {
  id: 9481,
  username: 'only dearly by',
  fullName: 'headquarters',
  sortableName: 'proffer sewer before',
  avatarImageUrl: 'inborn gosh',
  phone: '462-555-2713 x55763',
  locale: 'beautifully happy-go-lucky',
  gender: 'qua urgently',
  userType: 'TEACHER',
  userStatus: 'BLOCKED',
};

export const sampleWithNewData: NewAccounts = {
  username: 'boo inventor',
  fullName: 'intensely after pressurise',
  sortableName: 'likewise nickname lookout',
  phone: '786.560.8590 x95770',
  gender: 'instead',
  userType: 'TEACHER',
  userStatus: 'BLOCKED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
