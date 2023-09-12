import { User } from "./user.model";

export interface ProfileResponse {
    message: string;
    user: User;
}