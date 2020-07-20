import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { BurgerBuilder } from './Burger-Builder/burgerBuilder.component';
import { Orders } from './Orders/orders.component';

const routes: Routes = [ 
    {path:"", component:BurgerBuilder}, 
    {path:"orders", component:Orders} 
 ];
@NgModule({ 
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [RouterModule] 
}) 
export class AppRoutingModule { } export const 
RoutingComponent = [BurgerBuilder,Orders];
