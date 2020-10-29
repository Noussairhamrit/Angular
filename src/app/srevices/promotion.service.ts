import { Injectable } from '@angular/core';
/** */
import { Promotion } from '../shared/promotion';
import {PROMOTIONS } from '../shared/promotions';
import { resolve } from 'url';

/** */
import { of,Observable } from 'rxjs';
import { delay,map } from 'rxjs/operators';
/** */
/** */
import {HttpClient, HttpHandler} from '@angular/common/http'
import {baseURL} from '../shared/baseurl'
/** */

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http :HttpClient) { }

  ////------------------with http--------------------------////
  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL+'promotions');
   
  }
 
  getPromotion(id: string): Observable < Promotion > {
    return this.http.get<Promotion>(baseURL+'promotions/'+id);
    
   
  }

  
  getFeaturedPromotion(): Observable < Promotion > {
    return this.http.get<Promotion[]>(baseURL+'promotions?featured=true').pipe(map(promo=>promo[0]));
    
  }


 /*  getPromotions(): Promotion[] {
    return PROMOTIONS;
  } */

 /*  getPromotion(id: string): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  } */

  /* getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  } */

/////////////-------------with promise---------------//////
  /* getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }
 
  getPromotion(id: string): Promise < Promotion > {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
    });
   
  }

  
  getFeaturedPromotion(): Promise < Promotion > {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
    });
  } */
  
   /////////////-------------with Rxjs---------------//////

  /*  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
   
  }
 
  getPromotion(id: string): Observable < Promotion > {
    return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
    
   
  }

  
  getFeaturedPromotion(): Observable < Promotion > {
    return of (PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
    
  } */

}
