import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 12478,
  login: 'IhS*m.@IgrH\\ zmbnId\\hGjt\\DLVbuW',
};

export const sampleWithPartialData: IUser = {
  id: 23948,
  login: 'xl.KV',
};

export const sampleWithFullData: IUser = {
  id: 15004,
  login: 'qcO',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
