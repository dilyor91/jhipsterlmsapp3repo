import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 6431,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 3195,
  content: 'tingle parch which',
  date: dayjs('2024-05-22T09:29'),
  location: 'amid blah afore',
  address: 'ideal',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 25179,
  title: 'famously and',
  content: 'greedily',
  date: dayjs('2024-05-21T17:58'),
  startTime: 31899,
  endTime: 23366,
  location: 'around likewise knowingly',
  address: 'following um keenly',
  eventFrequency: 'DAILY',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
