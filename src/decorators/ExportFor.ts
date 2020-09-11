import {getGlobalMap} from "../utils";

export const ExportFor = (role: string) =>
    (): PropertyDecorator =>
    (target: Object, propertyKey: string | symbol) => {
        getGlobalMap().push({role,target,propertyKey})
    }
