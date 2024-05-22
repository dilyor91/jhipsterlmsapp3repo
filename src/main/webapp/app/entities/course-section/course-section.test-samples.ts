import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 21405,
  sectionName: 'unimpressively big',
};

export const sampleWithPartialData: ICourseSection = {
  id: 31249,
  sectionName: 'obediently',
};

export const sampleWithFullData: ICourseSection = {
  id: 22888,
  sectionName: 'admit',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'rigidly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
