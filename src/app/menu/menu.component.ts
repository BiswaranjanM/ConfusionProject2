import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish'

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  dishes: Dish[]=[] ;
  selectedDish:any;
   constructor(private dishService: DishService) { }
   
   ngOnInit() {
    this.dishService.getDishes().subscribe(dishes=>this.dishes=dishes);
   }
   
   onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}


  

  

