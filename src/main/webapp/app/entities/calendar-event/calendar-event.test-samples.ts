import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 4689,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 31320,
  title: 'across who consul',
  content: 'innocently so',
  endTime: 20666,
  location: 'for freeload',
  address: 'peel webpage',
  eventFrequency: 'WEEKLY',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 7462,
  title: 'puzzled eek harmonise',
  content: 'ukulele wicked anti',
  date: dayjs('2024-05-21T13:35'),
  startTime: 23809,
  endTime: 6043,
  location: 'mundane',
  address: 'decisive sedately',
  eventFrequency: 'NOREPEAT',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
