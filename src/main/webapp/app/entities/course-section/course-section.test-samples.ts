import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 14558,
  sectionName: 'thoughtfully',
};

export const sampleWithPartialData: ICourseSection = {
  id: 20449,
  sectionName: 'astride foxglove',
};

export const sampleWithFullData: ICourseSection = {
  id: 8026,
  sectionName: 'quickly',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'sports barring when',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
