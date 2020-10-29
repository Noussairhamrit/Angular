import { Component, OnInit,Inject } from '@angular/core';

import { Dish } from '../shared/dish';
/* import { DISHES } from '../shared/dishes'; */

import { DishService } from '../srevices/dish.service';
import { flyInOut,expand } from '../animations/app.animation';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[] 
  errMess: string;

 selectedDish :Dish;

  constructor(private _dishService: DishService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {  
    ///without promise  
    /* this.dishes = this._dishService.getDishes(); */

    ////with promise
    this._dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,errmess => this.errMess = <any>errmess);
    
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
