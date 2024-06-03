import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 31384,
  firstName: 'Ollie',
  lastName: 'Simonis',
  middleName: 'strictly',
  gender: 'acquiesce',
  birthdate: 'pro bare',
  email: 'Sadye.Skiles@yahoo.com',
  passportNumber: 'until ack',
  jshshir: 'duh',
};

export const sampleWithPartialData: IStudent = {
  id: 19190,
  firstName: 'Armand',
  lastName: 'Sipes',
  middleName: 'not oversell',
  gender: 'probability yet',
  birthdate: 'um difficult',
  phoneNumber: 'triumphantly meh',
  email: 'Fermin_Friesen@gmail.com',
  passportNumber: 'geez staff than',
  jshshir: 'since',
  isActive: false,
  nationality: 'curiously flour',
  course: 31541,
  educationType: 'KECHKI',
};

export const sampleWithFullData: IStudent = {
  id: 6420,
  firstName: 'Cierra',
  lastName: 'Collins',
  middleName: 'before',
  gender: 'dollarize',
  birthdate: 'destruction weekly towards',
  phoneNumber: 'till seeder',
  email: 'Jamaal_Kassulke98@gmail.com',
  hemisId: 7899,
  passportNumber: 'dictate demilitarise',
  jshshir: 'boo',
  isActive: false,
  tutionType: 'KONTRAKT',
  nationality: 'diffract',
  country: 'Lithuania',
  city: 'Joneston',
  region: 'aw tomorrow',
  addressLine: 'interaction huzzah extra-small',
  course: 383,
  semester: 27903,
  educationLanguage: 'UZBEK',
  educationType: 'SIRTQI',
  educationForm: 'MAGISTR',
};

export const sampleWithNewData: NewStudent = {
  firstName: 'Elliott',
  lastName: 'Schiller',
  middleName: 'without colorless green',
  gender: 'lightly woot pickup',
  birthdate: 'nor',
  email: 'Carolina.Kihn@hotmail.com',
  passportNumber: 'meh',
  jshshir: 'following ack',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
