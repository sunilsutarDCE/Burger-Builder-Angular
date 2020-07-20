import { Component, OnInit } from "@angular/core";
import { IngredientsService } from '../Services/ingredients.service';
import { OrderService } from '../Services/orders.service';


@Component({
    selector: "app-burger-builder",
    templateUrl: "./burgerBuilder.template.html",
    styleUrls: ["./burgerBuilder.css"]
})
export class BurgerBuilder implements OnInit {
    ingredients;
    ingredientsPrice;
    totalPrice = 0;
    isReadyForCheckOut: Boolean = false;
    name = '';
    mobile = '';
    ingredientsArray = [];
    readyForSummary: Boolean = false;
    orderDone: Boolean = false;
    errorMsg='';

    constructor(private ingredientsData: IngredientsService,
        private orderData: OrderService) {

    }

    // On init component initialize total price and defaults by calling ingredients service
    ngOnInit() {

        this.ingredients = this.ingredientsData.getIngredients();
        this.updateIngredientsArray();

        this.ingredientsPrice = this.ingredientsData.getIngredientsPrice();
        this.totalPrice = this.ingredientsPrice['bun'] * this.ingredients['bun'];
        this.checkReadyForOrder();
    }

    // Creating and upgrading array to show burger ingredients UI
    updateIngredientsArray() {
        this.ingredientsArray = [];
        let tempIngredients;
        tempIngredients = {
            ...this.ingredients
        }
        Object.keys(tempIngredients).map(key => {
            if (key != 'bun') {
                let template = '';
                for (let i = 0; i < this.ingredients[key]; i++) {
                    template = template + '<div class="' + key + '">&nbsp;</div>';
                }
                this.ingredientsArray.push({
                    'inName': key,
                    'count': this.ingredients[key],
                    'innerHTML': template
                })
            }

        });
    }

    // Add ingredients
    addIngredient(type) {
        this.ingredients[type] = this.ingredients[type] + 1;
        this.totalPrice = this.totalPrice + this.ingredientsPrice[type];
        this.updateIngredientsArray();
        this.checkReadyForOrder();
    }

    // Remove ingredients
    removeIngredient(type) {
        if (this.ingredients[type] > 0) {
            this.ingredients[type] = this.ingredients[type] - 1;
            this.totalPrice = this.totalPrice - this.ingredientsPrice[type];
            this.updateIngredientsArray();
            this.checkReadyForOrder();
        }
    }

    checkReadyForOrder() {
        let tempFlag = this.ingredientsArray.map(c => {
            if (c.count > 0 && c.inName != 'bun')
                this.readyForSummary = true;
        })
    }

    // Order function which calls on clicking 'Order now' button
    order() {
        this.isReadyForCheckOut = true;
    }

    // Check out button with validation for name and mobile
    checkOut() {
        if (this.name != '' && this.mobile != '') {
            let currentDate = new Date();

            this.orderData.orderData({
                'name': this.name,
                'mobile': this.mobile,
                'orderDate' : currentDate,
                'ingredients': this.ingredients,
                'totalPrice': this.totalPrice
            });
            this.ingredients = this.ingredientsData.getIngredients();
            this.name = '';
            this.mobile = '';
            this.orderDone = true;
        }
        else
        {
            this.errorMsg="Please provide personal details";
        }
    }
}