import {ExportFor} from "../src/decorators/ExportFor";
import {UserRolesEnum} from "./UserRolesEnum";

export const ExportForAdmin = ExportFor(UserRolesEnum.ADMIN)
export const ExportForUser = ExportFor(UserRolesEnum.USER)
