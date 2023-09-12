import { LoginUser } from "./login.model";
import { User } from "./user.model";

export interface RegisterUser extends User, LoginUser {
    birthDate: Date;
}

export interface RegisterUserResponse {

}
