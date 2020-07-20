import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponent } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { BurgerBuilder } from './Burger-Builder/burgerBuilder.component';
import { IngredientsService } from './Services/ingredients.service';
import { OrderService } from './Services/orders.service';
import { FormsModule } from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    BurgerBuilder,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [IngredientsService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
