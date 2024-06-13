import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 18368,
  firstName: 'Rosalind',
  lastName: 'Auer',
  middleName: 'word incredible',
  gender: 'clam after',
  birthdate: 'satisfied ouch',
  email: 'Melvin.Schaefer92@yahoo.com',
  passportNumber: 'ideology rowdy',
  jshshir: 'doubtfully headline',
};

export const sampleWithPartialData: IStudent = {
  id: 4258,
  firstName: 'Jace',
  lastName: 'Hammes',
  middleName: 'yearly teriyaki however',
  gender: 'executor',
  birthdate: 'inasmuch ah',
  email: 'Manuel.Turcotte32@yahoo.com',
  passportNumber: 'actually better',
  jshshir: 'anenst hmph about',
  tutionType: 'KONTRAKT',
  nationality: 'criminalize annually perfectly',
  city: 'New Brunswick',
  addressLine: 'for',
  course: 5859,
  semester: 18484,
  educationLanguage: 'UZBEK',
  educationType: 'KUNDUZGI',
};

export const sampleWithFullData: IStudent = {
  id: 7732,
  firstName: 'Murray',
  lastName: 'Jenkins',
  middleName: 'serene',
  gender: 'between crazy why',
  birthdate: 'faithfully past odyssey',
  phoneNumber: 'out',
  email: 'Brendan.Collier@gmail.com',
  hemisId: 10868,
  passportNumber: 'throughout',
  jshshir: 'or texture',
  isActive: true,
  tutionType: 'GRANT',
  nationality: 'where',
  country: 'Angola',
  city: 'Joliet',
  region: 'conscientise',
  addressLine: 'exalt yippee',
  course: 32118,
  semester: 29542,
  educationLanguage: 'UZBEK',
  educationType: 'SIRTQI',
  educationForm: 'BAKALAVR',
};

export const sampleWithNewData: NewStudent = {
  firstName: 'Jaeden',
  lastName: 'Mante',
  middleName: 'guacamole oh',
  gender: 'till',
  birthdate: 'verbally next',
  email: 'Adeline_Murray74@hotmail.com',
  passportNumber: 'tensely elapse',
  jshshir: 'yahoo',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
