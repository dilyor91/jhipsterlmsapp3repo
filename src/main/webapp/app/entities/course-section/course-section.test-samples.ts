import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 28813,
  sectionName: 'aw',
};

export const sampleWithPartialData: ICourseSection = {
  id: 24465,
  sectionName: 'upward detainee until',
};

export const sampleWithFullData: ICourseSection = {
  id: 18824,
  sectionName: 'jumpsuit mask',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'crewmen pillar',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
