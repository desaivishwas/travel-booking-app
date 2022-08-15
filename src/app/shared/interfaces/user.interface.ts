import { IUserRoles } from "./roles.interface";

export interface IUser {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    myCustomData?: string;
    emailVerified?: boolean;
    roles: IUserRoles;
    userprofileid: string;
}