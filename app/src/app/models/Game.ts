import { Platform } from "@angular/cdk/platform";

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
    categories: string[] |undefined;
}


