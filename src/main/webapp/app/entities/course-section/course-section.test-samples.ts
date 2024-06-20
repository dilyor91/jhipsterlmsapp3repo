import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 13967,
  sectionName: 'aw crop anxiously',
};

export const sampleWithPartialData: ICourseSection = {
  id: 19467,
  sectionName: 'filing',
};

export const sampleWithFullData: ICourseSection = {
  id: 10684,
  sectionName: 'calorie',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'oily',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
