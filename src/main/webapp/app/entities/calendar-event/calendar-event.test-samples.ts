import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 2667,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 19217,
  title: 'whoa active',
  location: 'incompatible everlasting arrogantly',
  eventFrequency: 'NOREPEAT',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 30425,
  title: 'bah whereas',
  content: 'anenst acceptable yowza',
  date: dayjs('2024-05-21T22:55'),
  startTime: 7508,
  endTime: 17980,
  location: 'sans laugh furthermore',
  address: 'as shyly pfft',
  eventFrequency: 'WEEKLY',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
