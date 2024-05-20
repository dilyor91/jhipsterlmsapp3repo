import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'df83ece5-4280-4005-8576-74550e9a3d34',
};

export const sampleWithPartialData: IAuthority = {
  name: '18bee7c5-8424-48af-9780-36a82c655fa3',
};

export const sampleWithFullData: IAuthority = {
  name: 'ba1619e5-3584-40d8-a96b-beeeffb18a84',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
