import { Component, OnInit,Inject } from '@angular/core';

/** */
import { Dish } from '../shared/dish';
import { DishService } from '../srevices/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../srevices/promotion.service';
import {leader} from '../shared/leader'
import { LeaderService } from '../srevices/leader.service';


import { flyInOut,expand } from '../animations/app.animation';

/** */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {


  dish: Dish;
  dishErrMess:string;
  promotion: Promotion;
  leader :leader;
  
  
  constructor(private _dishservice: DishService,
              private _promotionservice: PromotionService,
              private _leadersevice :LeaderService,
              @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this._dishservice.getFeaturedDish().subscribe(dish=>this.dish = dish,errmess => this.dishErrMess = <any>errmess)
    this._promotionservice.getFeaturedPromotion().subscribe(promotion =>this.promotion =promotion )
    this._leadersevice.getFeaturedLeadre().subscribe( leader=>this.leader =leader)
  }

}
