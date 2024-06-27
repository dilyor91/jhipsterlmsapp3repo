import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 30418,
  firstName: 'Santa',
  lastName: 'King',
  middleName: 'interaction anarchy',
  gender: 'desktop decimalize',
  birthdate: 'lest fondly',
  email: 'Marlon.Steuber23@hotmail.com',
  passportNumber: 'uniform quash',
  jshshir: 'skylight',
};

export const sampleWithPartialData: IStudent = {
  id: 23738,
  firstName: 'Trey',
  lastName: 'Dooley',
  middleName: 'by',
  gender: 'distant yurt',
  birthdate: 'supply leafy',
  phoneNumber: 'dismal',
  email: 'Floyd.Zieme@yahoo.com',
  passportNumber: 'decriminalize whoa',
  jshshir: 'oh along unto',
  isActive: true,
  tutionType: 'GRANT',
  country: "Democratic People's Republic of Korea",
  city: 'McGlynnview',
  addressLine: 'ack',
  educationLanguage: 'UZBEK',
};

export const sampleWithFullData: IStudent = {
  id: 22495,
  firstName: 'Miles',
  lastName: 'Thiel',
  middleName: 'wave tenderly',
  gender: 'svelte',
  birthdate: 'consequently afterwards',
  phoneNumber: 'macro reform pupil',
  email: 'Nikko29@gmail.com',
  hemisId: 20348,
  passportNumber: 'gah',
  jshshir: 'proof-reader provided actual',
  isActive: true,
  tutionType: 'GRANT',
  nationality: 'extremely',
  country: 'Estonia',
  city: 'Roobshire',
  region: 'carport bah ruminate',
  addressLine: 'past direct',
  course: 645,
  semester: 10811,
  educationLanguage: 'UZBEK',
  educationType: 'SIRTQI',
  educationForm: 'BAKALAVR',
};

export const sampleWithNewData: NewStudent = {
  firstName: 'Antonette',
  lastName: 'Wisoky',
  middleName: 'supposing firm',
  gender: 'qua transgress incidentally',
  birthdate: 'worriedly aw',
  email: 'Emmanuel_Douglas34@yahoo.com',
  passportNumber: 'owlishly',
  jshshir: 'afterwards oof footnote',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
