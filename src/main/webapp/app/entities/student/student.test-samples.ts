import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 23872,
  firstName: 'Mac',
  lastName: 'Grady',
  middleName: 'absence bake',
  gender: 'nor softly once',
  birthdate: 'blah',
  email: 'Darion.Gusikowski91@hotmail.com',
  passportNumber: 'piggyback beside',
  jshshir: 'invigilate among silky',
};

export const sampleWithPartialData: IStudent = {
  id: 14838,
  firstName: 'Elyse',
  lastName: 'Runolfsdottir',
  middleName: 'what low',
  gender: 'gah',
  birthdate: 'bah wrongly',
  email: 'Joana.Jacobs7@yahoo.com',
  passportNumber: 'of into',
  jshshir: 'onto',
  isActive: false,
  tutionType: 'KONTRAKT',
  city: 'Linden',
  educationLanguage: 'RUSSIAN',
};

export const sampleWithFullData: IStudent = {
  id: 7093,
  firstName: 'Nelson',
  lastName: 'Beatty',
  middleName: 'journey frightfully ack',
  gender: 'interestingly',
  birthdate: 'threadbare substitute supposing',
  phoneNumber: 'declination',
  email: 'Antonina58@hotmail.com',
  hemisId: 16338,
  passportNumber: 'goat',
  jshshir: 'evenly in',
  isActive: true,
  tutionType: 'GRANT',
  nationality: 'sick',
  country: 'Turks and Caicos Islands',
  city: 'Geovannytown',
  region: 'pace since um',
  addressLine: 'wetly',
  course: 25117,
  semester: 13191,
  educationLanguage: 'ENGLISH',
  educationType: 'SIRTQI',
  educationForm: 'MAGISTR',
};

export const sampleWithNewData: NewStudent = {
  firstName: 'Weldon',
  lastName: 'Brown',
  middleName: 'ah merit from',
  gender: 'dry concerning',
  birthdate: 'pause hm gosh',
  email: 'Norwood81@hotmail.com',
  passportNumber: 'following blah',
  jshshir: 'briskly along',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
