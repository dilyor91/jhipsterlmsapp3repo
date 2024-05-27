import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 28678,
  sectionName: 'filing',
};

export const sampleWithPartialData: ICourseSection = {
  id: 15780,
  sectionName: 'from',
};

export const sampleWithFullData: ICourseSection = {
  id: 7099,
  sectionName: 'weak which',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'whereas',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
