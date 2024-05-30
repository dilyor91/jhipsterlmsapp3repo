export interface ISpeciality {
  id: number;
}

export type NewSpeciality = Omit<ISpeciality, 'id'> & { id: null };
