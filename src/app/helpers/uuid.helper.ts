import {v4 as uuid} from 'uuid'; 

export class Uuid {
    static generateUuid(): string {
        return uuid();
    }
}