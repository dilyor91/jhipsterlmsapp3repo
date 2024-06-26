import { ITeacher, NewTeacher } from './teacher.model';

export const sampleWithRequiredData: ITeacher = {
  id: 23372,
  firstName: 'Fanny',
  lastName: 'Bayer-Monahan',
  gender: 'FEMALE',
  birthdate: 'hmph',
  email: 'Clemens_Boyer98@hotmail.com',
  passportNumber: 'noted ultimate er',
  jshshir: 'humming secrecy',
};

export const sampleWithPartialData: ITeacher = {
  id: 28161,
  firstName: 'Jan',
  lastName: 'Cole-Nienow',
  gender: 'MALE',
  birthdate: 'er',
  email: 'Lawson.Brakus34@hotmail.com',
  passportNumber: 'radiate whoa',
  jshshir: 'official',
  isActive: true,
  addressLine: 'sandal rocket-ship',
  position: 'KATTA_OQITUVCHI',
  academicDegree: 'PHD',
};

export const sampleWithFullData: ITeacher = {
  id: 23611,
  firstName: 'Pablo',
  lastName: 'Upton',
  middleName: 'in mushroom',
  gender: 'FEMALE',
  birthdate: 'since outside',
  phoneNumber: 'combine shoddy ick',
  email: 'Misael0@hotmail.com',
  passportNumber: 'passionate hopelessly',
  jshshir: 'qua bite',
  isActive: false,
  nationality: 'that hence defiantly',
  country: 'Serbia',
  city: 'Hanford',
  region: 'of',
  addressLine: 'provided including',
  position: 'KAFEDRA_MUDIRI',
  academicDegree: 'PHD',
  academicTitle: 'PROFESSOR',
};

export const sampleWithNewData: NewTeacher = {
  firstName: 'Kayla',
  lastName: 'Wyman-Reichert',
  gender: 'FEMALE',
  birthdate: 'friction gaseous boohoo',
  email: 'Schuyler4@hotmail.com',
  passportNumber: 'collaboration and',
  jshshir: 'usefully stormy and',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
