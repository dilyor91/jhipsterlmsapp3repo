import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { GroupService } from '../service/group.service';
import { IGroup } from '../group.model';
import { GroupFormService } from './group-form.service';

import { GroupUpdateComponent } from './group-update.component';

describe('Group Management Update Component', () => {
  let comp: GroupUpdateComponent;
  let fixture: ComponentFixture<GroupUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let groupFormService: GroupFormService;
  let groupService: GroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, GroupUpdateComponent],
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
      .overrideTemplate(GroupUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(GroupUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    groupFormService = TestBed.inject(GroupFormService);
    groupService = TestBed.inject(GroupService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const group: IGroup = { id: 456 };

      activatedRoute.data = of({ group });
      comp.ngOnInit();

      expect(comp.group).toEqual(group);
    });
  });

  describe('save', () => {
    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IGroup>>();
      const group = { id: 123 };
      jest.spyOn(groupFormService, 'getGroup').mockReturnValue({ id: null });
      jest.spyOn(groupService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ group: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: group }));
      saveSubject.complete();

      // THEN
      expect(groupFormService.getGroup).toHaveBeenCalled();
      expect(groupService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });
  });
});
