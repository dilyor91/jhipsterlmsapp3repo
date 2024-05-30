import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 9637,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 4480,
  content: 'whenever aboard',
  startTime: 4371,
  location: 'rewarding',
  eventFrequency: 'WEEKLY',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 29938,
  title: 'excepting rightfully',
  content: 'happily',
  date: dayjs('2024-05-22T03:04'),
  startTime: 2161,
  endTime: 17797,
  location: 'strong',
  address: 'incidentally',
  eventFrequency: 'DAILY',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
