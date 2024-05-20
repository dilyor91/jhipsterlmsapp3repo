import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 15815,
  sectionName: 'assessment',
};

export const sampleWithPartialData: ICourseSection = {
  id: 29543,
  sectionName: 'phew striped psst',
};

export const sampleWithFullData: ICourseSection = {
  id: 17538,
  sectionName: 'yesterday as',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'glass',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
