import { Platform } from "../models/Platform";
import { Category } from "../models/Category";

export class Game{        
    id: string| undefined;
    gameId: string| undefined;
    type: string| undefined;
    personId: string| undefined;
    name: string| undefined;
    description: string| undefined;
    price: number| undefined;
    size: string| undefined;
    cover: string| undefined;
    picture: string| undefined;
    platforms: Platform[] |undefined;
    categories: Category[] |undefined;
}


