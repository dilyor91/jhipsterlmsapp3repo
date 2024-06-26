import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 30649,
  firstName: 'Simone',
  lastName: 'Ward',
  middleName: 'photoshop interview scar',
  gender: 'eek pfft',
  birthdate: 'vivaciously',
  email: 'Branson85@hotmail.com',
  passportNumber: 'phew',
  jshshir: 'geez mmm',
};

export const sampleWithPartialData: IStudent = {
  id: 15018,
  firstName: 'Kaelyn',
  lastName: 'Reilly',
  middleName: 'phooey tricky midst',
  gender: 'brr',
  birthdate: 'prickle snappy',
  phoneNumber: 'um huzzah yuck',
  email: 'Josue35@yahoo.com',
  hemisId: 11659,
  passportNumber: 'gosh',
  jshshir: 'rebel old-fashioned needily',
  tutionType: 'KONTRAKT',
  country: 'Cuba',
  city: 'Raynorshire',
  addressLine: 'boo actually unlined',
  course: 16958,
  educationLanguage: 'ENGLISH',
};

export const sampleWithFullData: IStudent = {
  id: 12902,
  firstName: 'Zackary',
  lastName: 'Schulist',
  middleName: 'reject',
  gender: 'unto',
  birthdate: 'blog',
  phoneNumber: 'progenitor upholster',
  email: 'Lilliana.Prosacco66@gmail.com',
  hemisId: 2414,
  passportNumber: 'why yowza',
  jshshir: 'well-documented pace notwithstanding',
  isActive: false,
  tutionType: 'KONTRAKT',
  nationality: 'carport bah ruminate',
  country: 'Cayman Islands',
  city: 'South Curtis',
  region: 'jam-packed',
  addressLine: 'blah judgementally snoopy',
  course: 21849,
  semester: 29787,
  educationLanguage: 'UZBEK',
  educationType: 'SIRTQI',
  educationForm: 'BAKALAVR',
};

export const sampleWithNewData: NewStudent = {
  firstName: 'Josefa',
  lastName: 'Cummerata',
  middleName: 'forthright borrow tangible',
  gender: 'loincloth',
  birthdate: 'mambo closely which',
  email: 'Geovanni34@gmail.com',
  passportNumber: 'deserted',
  jshshir: 'concerning minus',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
