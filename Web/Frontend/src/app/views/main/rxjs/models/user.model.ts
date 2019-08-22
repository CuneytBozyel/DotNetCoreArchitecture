import { UserCity } from "./user.city.model";
import { UserCompany } from "./user.company.model";

export class User {
    userId!: number;
    name!: string;
    cities!: UserCity[];
    companies!: UserCompany[];
}
