import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 7031,
  sectionName: 'but ha',
};

export const sampleWithPartialData: ICourseSection = {
  id: 1567,
  sectionName: 'upper',
};

export const sampleWithFullData: ICourseSection = {
  id: 4662,
  sectionName: 'new scallop warlord',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'mid',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
