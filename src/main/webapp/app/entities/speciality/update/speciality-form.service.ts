import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ISpeciality, NewSpeciality } from '../speciality.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ISpeciality for edit and NewSpecialityFormGroupInput for create.
 */
type SpecialityFormGroupInput = ISpeciality | PartialWithRequiredKeyOf<NewSpeciality>;

type SpecialityFormDefaults = Pick<NewSpeciality, 'id'>;

type SpecialityFormGroupContent = {
  id: FormControl<ISpeciality['id'] | NewSpeciality['id']>;
};

export type SpecialityFormGroup = FormGroup<SpecialityFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class SpecialityFormService {
  createSpecialityFormGroup(speciality: SpecialityFormGroupInput = { id: null }): SpecialityFormGroup {
    const specialityRawValue = {
      ...this.getFormDefaults(),
      ...speciality,
    };
    return new FormGroup<SpecialityFormGroupContent>({
      id: new FormControl(
        { value: specialityRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
    });
  }

  getSpeciality(form: SpecialityFormGroup): NewSpeciality {
    return form.getRawValue() as NewSpeciality;
  }

  resetForm(form: SpecialityFormGroup, speciality: SpecialityFormGroupInput): void {
    const specialityRawValue = { ...this.getFormDefaults(), ...speciality };
    form.reset(
      {
        ...specialityRawValue,
        id: { value: specialityRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): SpecialityFormDefaults {
    return {
      id: null,
    };
  }
}
