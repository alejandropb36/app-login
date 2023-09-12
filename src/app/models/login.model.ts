import { User } from "./user.model";

export interface LoginUser {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    user: User;
    token: string;
}