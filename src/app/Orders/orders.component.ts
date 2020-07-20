import { OnInit, Component } from '@angular/core';
import { OrderService } from '../Services/orders.service';

@Component({
    selector : "app-orders",
    templateUrl : "./orders.template.html",
    styleUrls:['./orders.css']
})
export class Orders implements OnInit
{
    orderData=[];
    searchText;
    constructor(private ordersData:OrderService)
    {

    }

    // On init component calling order service and show in table
    ngOnInit()
    {
        this.orderData=this.ordersData.getOrders();
        console.log(this.orderData);
    }
}