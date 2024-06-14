import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 4233,
  firstName: 'Darrell',
  lastName: 'Skiles',
  middleName: 'grandiose dependent mystery',
  gender: 'darn',
  birthdate: 'following as',
  email: 'Napoleon_Daniel19@gmail.com',
  passportNumber: 'smoggy lever prickly',
  jshshir: 'majestically modulo',
};

export const sampleWithPartialData: IStudent = {
  id: 19991,
  firstName: 'Doyle',
  lastName: 'Rolfson',
  middleName: 'sociable',
  gender: 'carelessly personalize',
  birthdate: 'washbasin',
  phoneNumber: 'beneath',
  email: 'Colin_Rice@hotmail.com',
  passportNumber: 'boo',
  jshshir: 'amid',
  country: 'San Marino',
  city: 'Tallahassee',
  addressLine: 'review',
  course: 11026,
  semester: 2622,
  educationType: 'SIRTQI',
};

export const sampleWithFullData: IStudent = {
  id: 22294,
  firstName: 'Kacey',
  lastName: 'Tillman',
  middleName: 'than fearless polliwog',
  gender: 'after hydraulics speedy',
  birthdate: 'under',
  phoneNumber: 'right as excepting',
  email: 'Marley.Johnson93@hotmail.com',
  hemisId: 14683,
  passportNumber: 'boohoo',
  jshshir: 'circa likewise huzzah',
  isActive: true,
  tutionType: 'KONTRAKT',
  nationality: 'crisp',
  country: 'Heard Island and McDonald Islands',
  city: 'Lake Ivystead',
  region: 'frankly',
  addressLine: 'smirk untimely',
  course: 4683,
  semester: 15898,
  educationLanguage: 'UZBEK',
  educationType: 'KECHKI',
  educationForm: 'MAGISTR',
};

export const sampleWithNewData: NewStudent = {
  firstName: 'Carole',
  lastName: 'Rodriguez',
  middleName: 'geez hm throughout',
  gender: 'yum',
  birthdate: 'true plus',
  email: 'Jameson1@gmail.com',
  passportNumber: 'pupa because',
  jshshir: 'which',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
