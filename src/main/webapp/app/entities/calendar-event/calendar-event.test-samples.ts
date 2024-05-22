import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 6041,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 8942,
  title: 'escalator perfectly rundown',
  content: 'cop whenever vol',
  date: dayjs('2024-05-21T23:31'),
  startTime: 13997,
  location: 'aw',
  address: 'intelligent',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 19526,
  title: 'flow aha',
  content: 'luxurious finally instead',
  date: dayjs('2024-05-22T06:45'),
  startTime: 31338,
  endTime: 12995,
  location: 'ack considering',
  address: 'towards',
  eventFrequency: 'NOREPEAT',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
