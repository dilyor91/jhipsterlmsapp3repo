import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/service/user.service';
import { TeacherService } from '../service/teacher.service';
import { ITeacher } from '../teacher.model';
import { TeacherFormService } from './teacher-form.service';

import { TeacherUpdateComponent } from './teacher-update.component';

describe('Teacher Management Update Component', () => {
  let comp: TeacherUpdateComponent;
  let fixture: ComponentFixture<TeacherUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let teacherFormService: TeacherFormService;
  let teacherService: TeacherService;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TeacherUpdateComponent],
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
      .overrideTemplate(TeacherUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(TeacherUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    teacherFormService = TestBed.inject(TeacherFormService);
    teacherService = TestBed.inject(TeacherService);
    userService = TestBed.inject(UserService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call User query and add missing value', () => {
      const teacher: ITeacher = { id: 456 };
      const user: IUser = { id: 28652 };
      teacher.user = user;

      const userCollection: IUser[] = [{ id: 21566 }];
      jest.spyOn(userService, 'query').mockReturnValue(of(new HttpResponse({ body: userCollection })));
      const additionalUsers = [user];
      const expectedCollection: IUser[] = [...additionalUsers, ...userCollection];
      jest.spyOn(userService, 'addUserToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ teacher });
      comp.ngOnInit();

      expect(userService.query).toHaveBeenCalled();
      expect(userService.addUserToCollectionIfMissing).toHaveBeenCalledWith(
        userCollection,
        ...additionalUsers.map(expect.objectContaining),
      );
      expect(comp.usersSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const teacher: ITeacher = { id: 456 };
      const user: IUser = { id: 28292 };
      teacher.user = user;

      activatedRoute.data = of({ teacher });
      comp.ngOnInit();

      expect(comp.usersSharedCollection).toContain(user);
      expect(comp.teacher).toEqual(teacher);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITeacher>>();
      const teacher = { id: 123 };
      jest.spyOn(teacherFormService, 'getTeacher').mockReturnValue(teacher);
      jest.spyOn(teacherService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ teacher });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: teacher }));
      saveSubject.complete();

      // THEN
      expect(teacherFormService.getTeacher).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(teacherService.update).toHaveBeenCalledWith(expect.objectContaining(teacher));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITeacher>>();
      const teacher = { id: 123 };
      jest.spyOn(teacherFormService, 'getTeacher').mockReturnValue({ id: null });
      jest.spyOn(teacherService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ teacher: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: teacher }));
      saveSubject.complete();

      // THEN
      expect(teacherFormService.getTeacher).toHaveBeenCalled();
      expect(teacherService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITeacher>>();
      const teacher = { id: 123 };
      jest.spyOn(teacherService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ teacher });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(teacherService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareUser', () => {
      it('Should forward to userService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(userService, 'compareUser');
        comp.compareUser(entity, entity2);
        expect(userService.compareUser).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
