import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 30925,
  sectionName: 'briefly',
};

export const sampleWithPartialData: ICourseSection = {
  id: 20507,
  sectionName: 'hm',
};

export const sampleWithFullData: ICourseSection = {
  id: 27163,
  sectionName: 'if hybridization but',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'clearly consequently uh-huh',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
