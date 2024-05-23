import dayjs from 'dayjs/esm';

import { ICalendarEvent, NewCalendarEvent } from './calendar-event.model';

export const sampleWithRequiredData: ICalendarEvent = {
  id: 4871,
};

export const sampleWithPartialData: ICalendarEvent = {
  id: 13301,
  content: 'blah brim',
  date: dayjs('2024-05-21T16:42'),
  startTime: 4938,
  endTime: 13035,
  location: 'pish heirloom',
  address: 'pungent',
};

export const sampleWithFullData: ICalendarEvent = {
  id: 2428,
  title: 'research',
  content: 'whose outlying yuck',
  date: dayjs('2024-05-21T16:59'),
  startTime: 12783,
  endTime: 30170,
  location: 'gadzooks',
  address: 'pajamas prize',
  eventFrequency: 'WEEKLY',
};

export const sampleWithNewData: NewCalendarEvent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
