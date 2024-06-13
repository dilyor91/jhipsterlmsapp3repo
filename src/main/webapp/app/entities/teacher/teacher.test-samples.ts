import { ITeacher, NewTeacher } from './teacher.model';

export const sampleWithRequiredData: ITeacher = {
  id: 24811,
  firstName: 'Demetrius',
  lastName: 'Adams',
  gender: 'MALE',
  birthdate: 'excitedly breakable eek',
  email: 'Ethelyn67@gmail.com',
  passportNumber: 'zowie failing',
  jshshir: 'undercook',
};

export const sampleWithPartialData: ITeacher = {
  id: 26680,
  firstName: 'Ariel',
  lastName: 'Schultz',
  gender: 'FEMALE',
  birthdate: 'whose',
  phoneNumber: 'pole',
  email: 'Lily.Bartell6@hotmail.com',
  passportNumber: 'what',
  jshshir: 'beneath',
  city: 'Alannaton',
  addressLine: 'curvy ouch',
  academicDegree: 'PHD',
  academicTitle: 'PROFESSOR',
};

export const sampleWithFullData: ITeacher = {
  id: 28477,
  firstName: 'Abagail',
  lastName: 'Mertz',
  middleName: 'fortunately from near',
  gender: 'MALE',
  birthdate: 'insubstantial uncertainty',
  phoneNumber: 'impassioned informal off',
  email: 'Lavinia62@hotmail.com',
  passportNumber: 'um value',
  jshshir: 'picturesque after wherever',
  isActive: false,
  nationality: 'pattern cleverly smear',
  country: 'Vietnam',
  city: 'Willisboro',
  region: 'tool whenever zowie',
  addressLine: 'diligent where hm',
  position: 'PROFESSOR',
  academicDegree: 'ILMIY_DARAJASIZ',
  academicTitle: 'PROFESSOR',
};

export const sampleWithNewData: NewTeacher = {
  firstName: 'Vernice',
  lastName: 'Kessler',
  gender: 'FEMALE',
  birthdate: 'whenever yet drool',
  email: 'Toy_Hickle@yahoo.com',
  passportNumber: 'until annual hunting',
  jshshir: 'inwardly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
