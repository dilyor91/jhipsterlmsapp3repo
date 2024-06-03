import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 2874,
  sectionName: 'than everlasting',
};

export const sampleWithPartialData: ICourseSection = {
  id: 32414,
  sectionName: 'orient disallow',
};

export const sampleWithFullData: ICourseSection = {
  id: 25508,
  sectionName: 'acidic why',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'kick',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
