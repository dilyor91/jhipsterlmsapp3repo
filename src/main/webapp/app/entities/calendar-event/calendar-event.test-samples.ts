import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 4414,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 15167,
  title: 'accelerant without',
  address: 'lest sneak',
  eventFrequency: 'DAILY',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 28186,
  title: 'transform art yahoo',
  content: 'schooner',
  date: dayjs('2024-05-21T19:58'),
  startTime: 25126,
  endTime: 15690,
  location: 'glutamate youthful once',
  address: 'mysteriously around zealous',
  eventFrequency: 'DAILY',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
