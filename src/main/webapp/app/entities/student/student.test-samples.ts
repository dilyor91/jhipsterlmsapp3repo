import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 19100,
  firstName: 'Onie',
  lastName: "O'Conner",
  middleName: 'chicory why as',
  gender: 'jaggedly supplier',
  birthdate: 'elegant',
  email: 'Reid81@hotmail.com',
  passportNumber: 'angelic',
  jshshir: 'quizzically infamous banter',
};

export const sampleWithPartialData: IStudent = {
  id: 10932,
  firstName: 'Elise',
  lastName: 'Oberbrunner',
  middleName: 'cute carpool',
  gender: 'ew summarize sir',
  birthdate: 'er besides severe',
  email: 'Emmitt88@gmail.com',
  passportNumber: 'gadzooks abaft during',
  jshshir: 'versus',
  isActive: false,
  tutionType: 'KONTRAKT',
  nationality: 'closely',
  country: 'Gambia',
  city: 'East Cyrilfurt',
  addressLine: 'discontinue meh',
  educationLanguage: 'ENGLISH',
};

export const sampleWithFullData: IStudent = {
  id: 17479,
  firstName: 'Janie',
  lastName: 'Fisher',
  middleName: 'barrel taro even',
  gender: 'vicious',
  birthdate: 'legal',
  phoneNumber: 'camp',
  email: 'Dorthy49@yahoo.com',
  hemisId: 10176,
  passportNumber: 'recliner till',
  jshshir: 'livid vastly begonia',
  isActive: false,
  tutionType: 'KONTRAKT',
  nationality: 'unlike spangle which',
  country: 'Reunion',
  city: 'Alafaya',
  region: 'exemplary boohoo',
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
