import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class OrderService implements OnInit {
    orders = [];

    constructor()
    {
        
    }

    ngOnInit()
    {
    }

    orderData(payload)
    {
        //call Order Serevice
        this.orders = JSON.parse(localStorage.getItem("ordersData"));

        //When first time nothing is there in localstorage
        if(this.orders==null)
            this.orders=[];

            //pushing orders
        this.orders.push(payload);
        localStorage.setItem("ordersData", JSON.stringify(this.orders));
    }

    //Getting orders from localstorage
    getOrders()
    {
        return JSON.parse(localStorage.getItem("ordersData"));
    }
}