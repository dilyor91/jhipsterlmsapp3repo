import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 17278,
  sectionName: 'after mine mediocre',
};

export const sampleWithPartialData: ICourseSection = {
  id: 20799,
  sectionName: 'including wonderfully loan',
};

export const sampleWithFullData: ICourseSection = {
  id: 12319,
  sectionName: 'apropos boldly aim',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'hire extremely',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
