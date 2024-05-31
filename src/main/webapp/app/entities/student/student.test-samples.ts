import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 25778,
  firstName: 'Lance',
  lastName: 'Luettgen',
  middleName: 'faraway',
  gender: 'unlike roll',
  birthdate: 'denationalise scuffle',
  email: 'Aurelia42@gmail.com',
  passportNumber: 'where supposing bashfully',
  jshshir: 'dreamily',
};

export const sampleWithPartialData: IStudent = {
  id: 2927,
  firstName: 'Kobe',
  lastName: 'Friesen',
  middleName: 'under clef',
  gender: 'clog up supposing',
  birthdate: 'abaft although indeed',
  email: 'Alvis.Moen@gmail.com',
  hemisId: 9740,
  passportNumber: 'overlay bowler',
  jshshir: 'badly',
  tutionType: 'GRANT',
  region: 'notwithstanding',
  addressLine: 'powerful why selfishly',
  course: 24264,
  semester: 5485,
  educationLanguage: 'ENGLISH',
  educationType: 'KUNDUZGI',
};

export const sampleWithFullData: IStudent = {
  id: 27452,
  firstName: 'Shakira',
  lastName: 'Kozey',
  middleName: 'abaft',
  gender: 'regularly',
  birthdate: 'what',
  phoneNumber: 'abnormally',
  email: 'Christiana39@yahoo.com',
  hemisId: 9651,
  passportNumber: 'aha failing',
  jshshir: 'furthermore oblong',
  isActive: true,
  tutionType: 'GRANT',
  nationality: 'gleefully volumize',
  country: 'Romania',
  city: 'Fort Kamron',
  region: 'cane courteous uh-huh',
  addressLine: 'millet duh outface',
  course: 27909,
  semester: 30490,
  educationLanguage: 'ENGLISH',
  educationType: 'SIRTQI',
  educationForm: 'MAGISTR',
};

export const sampleWithNewData: NewStudent = {
  firstName: 'Ken',
  lastName: 'Legros',
  middleName: 'wearily',
  gender: 'throb yippee',
  birthdate: 'ricochet drug',
  email: 'Immanuel7@hotmail.com',
  passportNumber: 'tremendously',
  jshshir: 'quarrelsomely',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
