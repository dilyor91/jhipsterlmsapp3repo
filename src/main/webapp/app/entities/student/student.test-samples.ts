import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 30639,
  firstName: 'Shania',
  lastName: 'McCullough',
  middleName: 'sleep with immediately',
  gender: 'mid',
  birthdate: 'around wherever sinful',
  email: 'Raven.Bernhard@hotmail.com',
  passportNumber: 'aw who',
  jshshir: 'before yahoo',
};

export const sampleWithPartialData: IStudent = {
  id: 21132,
  firstName: 'Jay',
  lastName: 'Donnelly',
  middleName: 'oof hare',
  gender: 'oof',
  birthdate: 'upbeat amidst incline',
  phoneNumber: 'stingy incidentally viciously',
  email: 'Ernestina_Orn@hotmail.com',
  hemisId: 163,
  passportNumber: 'although clout',
  jshshir: 'once before',
  isActive: true,
  tutionType: 'GRANT',
  country: 'Croatia',
  addressLine: 'infest near',
  educationLanguage: 'RUSSIAN',
  educationType: 'SIRTQI',
  educationForm: 'MAGISTR',
};

export const sampleWithFullData: IStudent = {
  id: 15426,
  firstName: 'Nat',
  lastName: 'Schaefer',
  middleName: 'shakily',
  gender: 'scarily barring flimsy',
  birthdate: 'after camp woot',
  phoneNumber: 'of after',
  email: 'Ricardo_Schuppe@yahoo.com',
  hemisId: 18034,
  passportNumber: 'rough lest',
  jshshir: 'quietly joke',
  isActive: false,
  tutionType: 'KONTRAKT',
  nationality: 'thoughtfully outside',
  country: 'Mauritania',
  city: 'Hermannstad',
  region: 'boohoo',
  addressLine: 'slobber nestling',
  course: 28684,
  semester: 13610,
  educationLanguage: 'UZBEK',
  educationType: 'KUNDUZGI',
  educationForm: 'BAKALAVR',
};

export const sampleWithNewData: NewStudent = {
  firstName: 'Jayme',
  lastName: 'Shields',
  middleName: 'while',
  gender: 'bah joint',
  birthdate: 'chauffeur circa disastrous',
  email: 'Chad_Lemke@yahoo.com',
  passportNumber: 'whereas',
  jshshir: 'scholarly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
