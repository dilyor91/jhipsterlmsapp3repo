import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 21109,
  firstName: 'Cristian',
  lastName: 'Huel',
  middleName: 'glass',
  gender: 'fairy whereas',
  birthdate: 'exactly',
  email: 'Laisha41@gmail.com',
  passportNumber: 'giving',
  jshshir: 'broadly fancy',
};

export const sampleWithPartialData: IStudent = {
  id: 18631,
  firstName: 'Eladio',
  lastName: 'Dare',
  middleName: 'propagandize overcook',
  gender: 'woot arrive',
  birthdate: 'relaxation',
  email: 'Eleazar_Hintz99@gmail.com',
  hemisId: 20918,
  passportNumber: 'ouch cue required',
  jshshir: 'haven middle hungrily',
  tutionType: 'GRANT',
  nationality: 'yuck after usually',
  country: 'Saint Pierre and Miquelon',
  region: 'exactly',
  addressLine: 'ample astride',
  semester: 28737,
  educationLanguage: 'UZBEK',
  educationForm: 'BAKALAVR',
};

export const sampleWithFullData: IStudent = {
  id: 21826,
  firstName: 'Bill',
  lastName: 'Howell-Hilll',
  middleName: 'bilk',
  gender: 'thump buzzing',
  birthdate: 'er',
  phoneNumber: 'yet from afterwards',
  email: 'Karianne_Schoen@yahoo.com',
  hemisId: 3222,
  passportNumber: 'wage',
  jshshir: 'angelic barren craft',
  isActive: false,
  tutionType: 'KONTRAKT',
  nationality: 'whereas unhealthy',
  country: 'Niger',
  city: 'Athens-Clarke County',
  region: 'unethically',
  addressLine: 'aware evocation',
  academicYear: 'ornery drat',
  course: 29754,
  semester: 28977,
  educationLanguage: 'RUSSIAN',
  educationType: 'SIRTQI',
  educationForm: 'MAGISTR',
};

export const sampleWithNewData: NewStudent = {
  firstName: 'Susanna',
  lastName: 'Kub',
  middleName: 'incomparable advertising ultimately',
  gender: 'competent boo inasmuch',
  birthdate: 'excepting while',
  email: 'Lila.Schneider@hotmail.com',
  passportNumber: 'calmly while',
  jshshir: 'inequality pfft imaginative',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
