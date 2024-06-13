import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 23064,
  login: 'j6FhL@8-y',
};

export const sampleWithPartialData: IUser = {
  id: 5686,
  login: 'Pdvq',
};

export const sampleWithFullData: IUser = {
  id: 26392,
  login: 'cO$t*@rVLi\\ztxYIX\\[qQx\\}9jfP\\2t3\\q3G',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
