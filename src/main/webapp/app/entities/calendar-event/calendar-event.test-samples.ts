import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 26190,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 450,
  content: 'unabashedly until',
  startTime: 531,
  eventFrequency: 'DAILY',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 15641,
  title: 'caterpillar',
  content: 'indeed through',
  date: dayjs('2024-05-21T12:14'),
  startTime: 9614,
  endTime: 25041,
  location: 'game furthermore',
  address: 'underneath per onto',
  eventFrequency: 'NOREPEAT',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
