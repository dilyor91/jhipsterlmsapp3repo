import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 31861,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 15655,
  title: 'gall intensify',
  content: 'mutter tinted',
  startTime: 12059,
  location: 'clack dearly',
  address: 'moth till prison',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 4533,
  title: 'through boiling allowance',
  content: 'incidentally blossom',
  date: dayjs('2024-05-21T17:13'),
  startTime: 17074,
  endTime: 5895,
  location: 'take-out barrel garment',
  address: 'gah',
  eventFrequency: 'NOREPEAT',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
