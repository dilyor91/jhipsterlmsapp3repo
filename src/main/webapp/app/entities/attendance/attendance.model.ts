import dayjs from 'dayjs/esm';
import { ICourse } from 'app/entities/course/course.model';
import { ICourseSection } from 'app/entities/course-section/course-section.model';
import { IUser } from 'app/entities/user/user.model';

export interface IAttendance {
  id: number;
  attendanceDate?: dayjs.Dayjs | null;
  course?: Pick<ICourse, 'id'> | null;
  courseSection?: Pick<ICourseSection, 'id'> | null;
  teacher?: Pick<IUser, 'id'> | null;
}

export type NewAttendance = Omit<IAttendance, 'id'> & { id: null };
