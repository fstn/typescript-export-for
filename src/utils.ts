import {UserRolesEnum} from "../test/UserRolesEnum";

export function getGlobalMap(){
    if(!(global as any).exportForFstn){
        (global as any).exportForFstn = []
    }
    return (global as any).exportForFstn
}

export function getPropertiesForRole(role: string) : [] {
    return getGlobalMap().filter((ent:any) => ent.role === role).map((ent: any) => ent.propertyKey)
}
