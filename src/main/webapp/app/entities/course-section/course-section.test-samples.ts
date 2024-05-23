import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 3828,
  sectionName: 'yum but',
};

export const sampleWithPartialData: ICourseSection = {
  id: 10255,
  sectionName: 'coordinated voluntarily',
};

export const sampleWithFullData: ICourseSection = {
  id: 14054,
  sectionName: 'ferociously wonderfully',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'supersize',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
