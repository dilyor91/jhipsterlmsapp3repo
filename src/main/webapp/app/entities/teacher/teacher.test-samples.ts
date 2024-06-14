import { ITeacher, NewTeacher } from './teacher.model';

export const sampleWithRequiredData: ITeacher = {
  id: 25929,
  firstName: 'Alisha',
  lastName: 'Gerhold',
  gender: 'MALE',
  birthdate: 'reassuringly till afore',
  email: 'Abdiel_Schuster28@yahoo.com',
  passportNumber: 'vice',
  jshshir: 'but finally shortwave',
};

export const sampleWithPartialData: ITeacher = {
  id: 19509,
  firstName: 'Camila',
  lastName: 'Prosacco',
  gender: 'MALE',
  birthdate: 'joyously whoa',
  email: 'Corine_Lockman91@hotmail.com',
  passportNumber: 'emit',
  jshshir: 'kneejerk chat narrowcast',
  addressLine: 'before',
  academicDegree: 'FAN_DOCTORI',
};

export const sampleWithFullData: ITeacher = {
  id: 27147,
  firstName: 'Sammy',
  lastName: 'Huel',
  middleName: 'inch innocently',
  gender: 'FEMALE',
  birthdate: 'cough yippee',
  phoneNumber: 'wildly orangutan',
  email: 'Dexter.Larson87@gmail.com',
  passportNumber: 'thankfully',
  jshshir: 'plus waste',
  isActive: false,
  nationality: 'defiantly crouch',
  country: 'Denmark',
  city: 'North Camila',
  region: 'before alter',
  addressLine: 'till',
  position: 'ASSISTENT',
  academicDegree: 'PHD',
  academicTitle: 'ILMIY_UNVONSIZ',
};

export const sampleWithNewData: NewTeacher = {
  firstName: 'Winona',
  lastName: 'Schaden',
  gender: 'MALE',
  birthdate: 'very however thorough',
  email: 'Garth_Bradtke@hotmail.com',
  passportNumber: 'show',
  jshshir: 'enthusiasm',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
