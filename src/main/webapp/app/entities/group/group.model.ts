export interface IGroup {
  id: number;
}

export type NewGroup = Omit<IGroup, 'id'> & { id: null };
