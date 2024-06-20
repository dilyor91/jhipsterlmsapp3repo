import { ITeacher, NewTeacher } from './teacher.model';

export const sampleWithRequiredData: ITeacher = {
  id: 20529,
  firstName: 'Emmet',
  lastName: 'Vandervort',
  gender: 'MALE',
  birthdate: 'rayon since',
  email: 'Malinda57@gmail.com',
  passportNumber: 'curiously bud',
  jshshir: 'over cable',
};

export const sampleWithPartialData: ITeacher = {
  id: 23437,
  firstName: 'Gerardo',
  lastName: 'Koelpin',
  middleName: 'redesign huzzah down',
  gender: 'MALE',
  birthdate: 'anchored silently unfortunately',
  phoneNumber: 'ample huzzah',
  email: 'Flossie.Zboncak53@yahoo.com',
  passportNumber: 'smoothly',
  jshshir: 'giggle jovially',
  isActive: false,
  city: 'Boise City',
  region: 'powder before temporariness',
  academicDegree: 'PHD',
  academicTitle: 'DOTSENT',
};

export const sampleWithFullData: ITeacher = {
  id: 22825,
  firstName: 'Leanne',
  lastName: 'Goodwin',
  middleName: 'adopt how',
  gender: 'MALE',
  birthdate: 'overbalance',
  phoneNumber: 'accouter',
  email: 'Veda.Johnson86@gmail.com',
  passportNumber: 'cheek',
  jshshir: 'palliate whenever',
  isActive: false,
  nationality: 'before',
  country: 'Virgin Islands, British',
  city: 'Marilieshire',
  region: 'cleverly',
  addressLine: 'offense scholarly',
  position: 'PROFESSOR',
  academicDegree: 'ILMIY_DARAJASIZ',
  academicTitle: 'DOTSENT',
};

export const sampleWithNewData: NewTeacher = {
  firstName: 'Merritt',
  lastName: 'Kuhn',
  gender: 'FEMALE',
  birthdate: 'meh',
  email: 'Cleve17@yahoo.com',
  passportNumber: 'scrabble faint',
  jshshir: 'below although',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
