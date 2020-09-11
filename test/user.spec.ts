import {getGlobalMap, getPropertiesForRole} from "../src/utils";
import {User} from "./entities/User";
import {UserRolesEnum} from "./UserRolesEnum";

describe("User test", () =>{
    it("should export properties for user", ()=>{
        const mike = new User()
        mike.login = "mike"
        mike.publicData = "public data"
        mike.privateData = "private data"
        const tom = new User()
        tom.login = "mike"
        tom.publicData = "public data"
        tom.privateData = "private data"

        const result = [];
        const propertiesForUser =  getPropertiesForRole(UserRolesEnum.USER)
        for (const property of propertiesForUser){
            result.push(tom[property])
        }
        console.log("user export for Mike",result)

        const adminResult = [];
        const propertiesForAdmin = getPropertiesForRole(UserRolesEnum.ADMIN)
        for (const property of propertiesForAdmin){
            adminResult.push(tom[property])
        }
        console.log("admin export for Mike",adminResult)
    })
})
