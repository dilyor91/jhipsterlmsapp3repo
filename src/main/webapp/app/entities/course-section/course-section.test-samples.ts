import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 5212,
  sectionName: 'um instead',
};

export const sampleWithPartialData: ICourseSection = {
  id: 32398,
  sectionName: 'aw',
};

export const sampleWithFullData: ICourseSection = {
  id: 21549,
  sectionName: 'yummy what vintage',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'where',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
