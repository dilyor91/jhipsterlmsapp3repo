import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 8027,
  sectionName: 'swift',
};

export const sampleWithPartialData: ICourseSection = {
  id: 10827,
  sectionName: 'raiment',
};

export const sampleWithFullData: ICourseSection = {
  id: 16926,
  sectionName: 'ew',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'though',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
