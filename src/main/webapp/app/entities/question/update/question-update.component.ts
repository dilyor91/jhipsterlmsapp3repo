import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IQuestionGroup } from 'app/entities/question-group/question-group.model';
import { QuestionGroupService } from 'app/entities/question-group/service/question-group.service';
import { IQuestion } from '../question.model';
import { QuestionService } from '../service/question.service';
import { QuestionFormService, QuestionFormGroup } from './question-form.service';

@Component({
  standalone: true,
  selector: 'jhi-question-update',
  templateUrl: './question-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class QuestionUpdateComponent implements OnInit {
  isSaving = false;
  question: IQuestion | null = null;

  questionGroupsSharedCollection: IQuestionGroup[] = [];

  protected questionService = inject(QuestionService);
  protected questionFormService = inject(QuestionFormService);
  protected questionGroupService = inject(QuestionGroupService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: QuestionFormGroup = this.questionFormService.createQuestionFormGroup();

  compareQuestionGroup = (o1: IQuestionGroup | null, o2: IQuestionGroup | null): boolean =>
    this.questionGroupService.compareQuestionGroup(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ question }) => {
      this.question = question;
      if (question) {
        this.updateForm(question);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const question = this.questionFormService.getQuestion(this.editForm);
    if (question.id !== null) {
      this.subscribeToSaveResponse(this.questionService.update(question));
    } else {
      this.subscribeToSaveResponse(this.questionService.create(question));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IQuestion>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(question: IQuestion): void {
    this.question = question;
    this.questionFormService.resetForm(this.editForm, question);

    this.questionGroupsSharedCollection = this.questionGroupService.addQuestionGroupToCollectionIfMissing<IQuestionGroup>(
      this.questionGroupsSharedCollection,
      question.questtionGroup,
    );
  }

  protected loadRelationshipsOptions(): void {
    this.questionGroupService
      .query()
      .pipe(map((res: HttpResponse<IQuestionGroup[]>) => res.body ?? []))
      .pipe(
        map((questionGroups: IQuestionGroup[]) =>
          this.questionGroupService.addQuestionGroupToCollectionIfMissing<IQuestionGroup>(questionGroups, this.question?.questtionGroup),
        ),
      )
      .subscribe((questionGroups: IQuestionGroup[]) => (this.questionGroupsSharedCollection = questionGroups));
  }
}