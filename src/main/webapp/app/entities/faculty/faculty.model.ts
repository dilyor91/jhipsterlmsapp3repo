export interface IFaculty {
  id: number;
}

export type NewFaculty = Omit<IFaculty, 'id'> & { id: null };
