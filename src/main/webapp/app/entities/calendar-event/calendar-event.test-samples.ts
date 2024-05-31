import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 28010,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 22290,
  content: 'potentially',
  startTime: 10377,
  endTime: 9597,
  location: 'messy',
  eventFrequency: 'NOREPEAT',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 24438,
  title: 'pretzel',
  content: 'bogus since hence',
  date: dayjs('2024-05-21T18:23'),
  startTime: 31589,
  endTime: 10024,
  location: 'peace remedy',
  address: 'firebomb busily accidentally',
  eventFrequency: 'WEEKLY',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
