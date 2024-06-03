import { ITeacher, NewTeacher } from './teacher.model';

export const sampleWithRequiredData: ITeacher = {
  id: 25203,
  firstName: 'Jessie',
  lastName: 'Heathcote-Jacobson',
  gender: 'FEMALE',
  birthdate: 'mangle hyphenate warp',
  email: 'Rusty.Koch60@yahoo.com',
  passportNumber: 'almost ack chorus',
  jshshir: 'um about past',
};

export const sampleWithPartialData: ITeacher = {
  id: 9483,
  firstName: 'Terry',
  lastName: 'Swift',
  middleName: 'woof cultivated shadowy',
  gender: 'FEMALE',
  birthdate: 'pfft',
  phoneNumber: 'blah pro unwieldy',
  email: 'Donnell.Walker@hotmail.com',
  passportNumber: 'blitz creamy',
  jshshir: 'afore',
  isActive: false,
  nationality: 'flustered righteously',
  addressLine: 'grizzled cook',
  position: 'DOTSENT',
  academicDegree: 'ILMIY_DARAJASIZ',
  academicTitle: 'PROFESSOR',
};

export const sampleWithFullData: ITeacher = {
  id: 14177,
  firstName: 'Arnulfo',
  lastName: 'Reinger-Lindgren',
  middleName: 'yum',
  gender: 'FEMALE',
  birthdate: 'relative',
  phoneNumber: 'because picturesque so',
  email: 'Ova72@gmail.com',
  passportNumber: 'above',
  jshshir: 'mid snore',
  isActive: false,
  nationality: 'zowie quack lead',
  country: 'Estonia',
  city: 'East Jesus',
  region: 'receptor',
  addressLine: 'ouch backfire',
  position: 'DOTSENT',
  academicDegree: 'FAN_DOCTORI',
  academicTitle: 'DOTSENT',
};

export const sampleWithNewData: NewTeacher = {
  firstName: 'Orland',
  lastName: 'Feest',
  gender: 'FEMALE',
  birthdate: 'bah even unless',
  email: 'Davin.Kulas82@hotmail.com',
  passportNumber: 'sample',
  jshshir: 'along',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
