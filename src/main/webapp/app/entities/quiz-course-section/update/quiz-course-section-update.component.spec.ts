import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { ICourse } from 'app/entities/course/course.model';
import { CourseService } from 'app/entities/course/service/course.service';
import { ICourseSection } from 'app/entities/course-section/course-section.model';
import { CourseSectionService } from 'app/entities/course-section/service/course-section.service';
import { IQuizCourseSection } from '../quiz-course-section.model';
import { QuizCourseSectionService } from '../service/quiz-course-section.service';
import { QuizCourseSectionFormService } from './quiz-course-section-form.service';

import { QuizCourseSectionUpdateComponent } from './quiz-course-section-update.component';

describe('QuizCourseSection Management Update Component', () => {
  let comp: QuizCourseSectionUpdateComponent;
  let fixture: ComponentFixture<QuizCourseSectionUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let quizCourseSectionFormService: QuizCourseSectionFormService;
  let quizCourseSectionService: QuizCourseSectionService;
  let courseService: CourseService;
  let courseSectionService: CourseSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, QuizCourseSectionUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(QuizCourseSectionUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(QuizCourseSectionUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    quizCourseSectionFormService = TestBed.inject(QuizCourseSectionFormService);
    quizCourseSectionService = TestBed.inject(QuizCourseSectionService);
    courseService = TestBed.inject(CourseService);
    courseSectionService = TestBed.inject(CourseSectionService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call Course query and add missing value', () => {
      const quizCourseSection: IQuizCourseSection = { id: 456 };
      const course: ICourse = { id: 3735 };
      quizCourseSection.course = course;

      const courseCollection: ICourse[] = [{ id: 6029 }];
      jest.spyOn(courseService, 'query').mockReturnValue(of(new HttpResponse({ body: courseCollection })));
      const additionalCourses = [course];
      const expectedCollection: ICourse[] = [...additionalCourses, ...courseCollection];
      jest.spyOn(courseService, 'addCourseToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ quizCourseSection });
      comp.ngOnInit();

      expect(courseService.query).toHaveBeenCalled();
      expect(courseService.addCourseToCollectionIfMissing).toHaveBeenCalledWith(
        courseCollection,
        ...additionalCourses.map(expect.objectContaining),
      );
      expect(comp.coursesSharedCollection).toEqual(expectedCollection);
    });

    it('Should call CourseSection query and add missing value', () => {
      const quizCourseSection: IQuizCourseSection = { id: 456 };
      const courseSection: ICourseSection = { id: 31223 };
      quizCourseSection.courseSection = courseSection;

      const courseSectionCollection: ICourseSection[] = [{ id: 28999 }];
      jest.spyOn(courseSectionService, 'query').mockReturnValue(of(new HttpResponse({ body: courseSectionCollection })));
      const additionalCourseSections = [courseSection];
      const expectedCollection: ICourseSection[] = [...additionalCourseSections, ...courseSectionCollection];
      jest.spyOn(courseSectionService, 'addCourseSectionToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ quizCourseSection });
      comp.ngOnInit();

      expect(courseSectionService.query).toHaveBeenCalled();
      expect(courseSectionService.addCourseSectionToCollectionIfMissing).toHaveBeenCalledWith(
        courseSectionCollection,
        ...additionalCourseSections.map(expect.objectContaining),
      );
      expect(comp.courseSectionsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const quizCourseSection: IQuizCourseSection = { id: 456 };
      const course: ICourse = { id: 29454 };
      quizCourseSection.course = course;
      const courseSection: ICourseSection = { id: 28440 };
      quizCourseSection.courseSection = courseSection;

      activatedRoute.data = of({ quizCourseSection });
      comp.ngOnInit();

      expect(comp.coursesSharedCollection).toContain(course);
      expect(comp.courseSectionsSharedCollection).toContain(courseSection);
      expect(comp.quizCourseSection).toEqual(quizCourseSection);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IQuizCourseSection>>();
      const quizCourseSection = { id: 123 };
      jest.spyOn(quizCourseSectionFormService, 'getQuizCourseSection').mockReturnValue(quizCourseSection);
      jest.spyOn(quizCourseSectionService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ quizCourseSection });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: quizCourseSection }));
      saveSubject.complete();

      // THEN
      expect(quizCourseSectionFormService.getQuizCourseSection).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(quizCourseSectionService.update).toHaveBeenCalledWith(expect.objectContaining(quizCourseSection));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IQuizCourseSection>>();
      const quizCourseSection = { id: 123 };
      jest.spyOn(quizCourseSectionFormService, 'getQuizCourseSection').mockReturnValue({ id: null });
      jest.spyOn(quizCourseSectionService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ quizCourseSection: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: quizCourseSection }));
      saveSubject.complete();

      // THEN
      expect(quizCourseSectionFormService.getQuizCourseSection).toHaveBeenCalled();
      expect(quizCourseSectionService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IQuizCourseSection>>();
      const quizCourseSection = { id: 123 };
      jest.spyOn(quizCourseSectionService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ quizCourseSection });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(quizCourseSectionService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareCourse', () => {
      it('Should forward to courseService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(courseService, 'compareCourse');
        comp.compareCourse(entity, entity2);
        expect(courseService.compareCourse).toHaveBeenCalledWith(entity, entity2);
      });
    });

    describe('compareCourseSection', () => {
      it('Should forward to courseSectionService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(courseSectionService, 'compareCourseSection');
        comp.compareCourseSection(entity, entity2);
        expect(courseSectionService.compareCourseSection).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
