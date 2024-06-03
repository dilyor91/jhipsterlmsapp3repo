import { ITeacher, NewTeacher } from './teacher.model';

export const sampleWithRequiredData: ITeacher = {
  id: 29366,
  firstName: 'Candace',
  lastName: 'Thompson',
  gender: 'FEMALE',
  birthdate: 'whenever',
  email: 'Myrtie.Jerde@hotmail.com',
  passportNumber: 'meh',
  jshshir: 'or yippee united',
};

export const sampleWithPartialData: ITeacher = {
  id: 7780,
  firstName: 'Hardy',
  lastName: 'Lynch',
  gender: 'MALE',
  birthdate: 'pink',
  phoneNumber: 'fast',
  email: 'Zella52@yahoo.com',
  passportNumber: 'phew riverbed',
  jshshir: 'loose regarding relieve',
  nationality: 'ashamed cruelly',
  region: 'dolman',
};

export const sampleWithFullData: ITeacher = {
  id: 29066,
  firstName: 'Izaiah',
  lastName: 'Kreiger',
  middleName: 'lustrous sternly comply',
  gender: 'FEMALE',
  birthdate: 'enunciate',
  phoneNumber: 'phooey shaker',
  email: 'Delphia.Ryan@gmail.com',
  passportNumber: 'dreamily',
  jshshir: 'amidst',
  isActive: false,
  nationality: 'uh-huh oversleep hmph',
  country: 'Croatia',
  city: 'South Lonmouth',
  region: 'crazy boohoo astonish',
  addressLine: 'who',
  position: 'ASSISTENT',
  academicDegree: 'ILMIY_DARAJASIZ',
  academicTitle: 'DOTSENT',
};

export const sampleWithNewData: NewTeacher = {
  firstName: 'Royce',
  lastName: 'Pfeffer',
  gender: 'MALE',
  birthdate: 'under',
  email: 'Don54@gmail.com',
  passportNumber: 'familiar',
  jshshir: 'mister',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
