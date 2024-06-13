import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 24108,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 32136,
  content: 'nearly beneath',
  date: dayjs('2024-05-21T23:24'),
  startTime: 10233,
  address: 'starch lest',
  eventFrequency: 'NOREPEAT',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 31212,
  title: 'far gah',
  content: 'during infantile',
  date: dayjs('2024-05-22T05:26'),
  startTime: 2219,
  endTime: 20158,
  location: 'blind clearly though',
  address: 'gadzooks gummy as',
  eventFrequency: 'DAILY',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
