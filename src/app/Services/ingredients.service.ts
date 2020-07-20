import { Injectable } from "@angular/core";

@Injectable()
export class IngredientsService
{
    constructor()
    {

    }

    //Getting default ingredients
    getIngredients()
    {
        return {
            bun : 2,
            salad : 0,
            cheese : 0,
            cutlet : 0
        };
    }

    //Getting default ingredients prices
    getIngredientsPrice()
    {
        return {
            bun : 5,
            salad : 5,
            cheese : 1,
            cutlet : 2,
            totalPrice : 10
        };
    }
}