import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { IStudentQuestion } from 'app/entities/student-question/student-question.model';
import { StudentQuestionService } from 'app/entities/student-question/service/student-question.service';
import { StudentOptionService } from '../service/student-option.service';
import { IStudentOption } from '../student-option.model';
import { StudentOptionFormService } from './student-option-form.service';

import { StudentOptionUpdateComponent } from './student-option-update.component';

describe('StudentOption Management Update Component', () => {
  let comp: StudentOptionUpdateComponent;
  let fixture: ComponentFixture<StudentOptionUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let studentOptionFormService: StudentOptionFormService;
  let studentOptionService: StudentOptionService;
  let studentQuestionService: StudentQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StudentOptionUpdateComponent],
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
      .overrideTemplate(StudentOptionUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(StudentOptionUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    studentOptionFormService = TestBed.inject(StudentOptionFormService);
    studentOptionService = TestBed.inject(StudentOptionService);
    studentQuestionService = TestBed.inject(StudentQuestionService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call StudentQuestion query and add missing value', () => {
      const studentOption: IStudentOption = { id: 456 };
      const studentQuestion: IStudentQuestion = { id: 32364 };
      studentOption.studentQuestion = studentQuestion;

      const studentQuestionCollection: IStudentQuestion[] = [{ id: 16276 }];
      jest.spyOn(studentQuestionService, 'query').mockReturnValue(of(new HttpResponse({ body: studentQuestionCollection })));
      const additionalStudentQuestions = [studentQuestion];
      const expectedCollection: IStudentQuestion[] = [...additionalStudentQuestions, ...studentQuestionCollection];
      jest.spyOn(studentQuestionService, 'addStudentQuestionToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ studentOption });
      comp.ngOnInit();

      expect(studentQuestionService.query).toHaveBeenCalled();
      expect(studentQuestionService.addStudentQuestionToCollectionIfMissing).toHaveBeenCalledWith(
        studentQuestionCollection,
        ...additionalStudentQuestions.map(expect.objectContaining),
      );
      expect(comp.studentQuestionsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const studentOption: IStudentOption = { id: 456 };
      const studentQuestion: IStudentQuestion = { id: 17455 };
      studentOption.studentQuestion = studentQuestion;

      activatedRoute.data = of({ studentOption });
      comp.ngOnInit();

      expect(comp.studentQuestionsSharedCollection).toContain(studentQuestion);
      expect(comp.studentOption).toEqual(studentOption);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IStudentOption>>();
      const studentOption = { id: 123 };
      jest.spyOn(studentOptionFormService, 'getStudentOption').mockReturnValue(studentOption);
      jest.spyOn(studentOptionService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ studentOption });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: studentOption }));
      saveSubject.complete();

      // THEN
      expect(studentOptionFormService.getStudentOption).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(studentOptionService.update).toHaveBeenCalledWith(expect.objectContaining(studentOption));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IStudentOption>>();
      const studentOption = { id: 123 };
      jest.spyOn(studentOptionFormService, 'getStudentOption').mockReturnValue({ id: null });
      jest.spyOn(studentOptionService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ studentOption: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: studentOption }));
      saveSubject.complete();

      // THEN
      expect(studentOptionFormService.getStudentOption).toHaveBeenCalled();
      expect(studentOptionService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IStudentOption>>();
      const studentOption = { id: 123 };
      jest.spyOn(studentOptionService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ studentOption });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(studentOptionService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareStudentQuestion', () => {
      it('Should forward to studentQuestionService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(studentQuestionService, 'compareStudentQuestion');
        comp.compareStudentQuestion(entity, entity2);
        expect(studentQuestionService.compareStudentQuestion).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
