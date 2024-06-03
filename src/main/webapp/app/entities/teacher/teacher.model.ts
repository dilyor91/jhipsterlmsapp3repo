import { GenderEnum } from 'app/entities/enumerations/gender-enum.model';
import { PositionEnum } from 'app/entities/enumerations/position-enum.model';
import { AcademicDegreeEnum } from 'app/entities/enumerations/academic-degree-enum.model';
import { AcademicTitleEnum } from 'app/entities/enumerations/academic-title-enum.model';

export interface ITeacher {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  gender?: keyof typeof GenderEnum | null;
  birthdate?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  passportNumber?: string | null;
  jshshir?: string | null;
  isActive?: boolean | null;
  nationality?: string | null;
  country?: string | null;
  city?: string | null;
  region?: string | null;
  addressLine?: string | null;
  position?: keyof typeof PositionEnum | null;
  academicDegree?: keyof typeof AcademicDegreeEnum | null;
  academicTitle?: keyof typeof AcademicTitleEnum | null;
}

export type NewTeacher = Omit<ITeacher, 'id'> & { id: null };
