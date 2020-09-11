import {Owner} from "./Owner";
import {ExportForAdmin, ExportForUser} from "../OwnDecorators";

export class User extends Owner{
    @ExportForUser()
    login!: string;
    @ExportForAdmin()
    password!: string;
    @ExportForAdmin()
    phone!: string;
    @ExportForUser()
    publicData!: string;
    @ExportForAdmin()
    privateData! : string;
}
