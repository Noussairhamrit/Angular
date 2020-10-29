import { Injectable } from '@angular/core';
/** */
import {leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

/** */
import { of,Observable } from 'rxjs';
import { delay ,map} from 'rxjs/operators';

/** */
import {HttpClient} from '@angular/common/http'
import {baseURL} from '../shared/baseurl'
/** */

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient) { }
  ////---------------with http-------------/////

  getCorporate():Observable<leader[]>{
    return this.http.get<leader[]>(baseURL+'leadership');
    
     }
  
  getFeaturedLeadre():Observable<leader> {
    return this.http.get<leader[]>(baseURL+'leadership?featured=true').pipe(map(leader=>leader[0]));
    
     }

  /* getCorporate():Promise<leader[]>{
    return Promise.resolve(LEADERS) 
  } */

 /* getFeaturedLeadre():Promise<leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }  */

  /* getCorporate():Promise<leader[]>{
  return  new Promise(resolve=> {
    // Simulate server latency with 2 second delay
      setTimeout(() => resolve (LEADERS), 2000);
  });
}

getFeaturedLeadre():Promise<leader> {
  return new Promise(resolve=> {
    // Simulate server latency with 2 second delay
      setTimeout(() => resolve (LEADERS.filter((leader) => leader.featured)[0]), 2000);
  });
} */

////------------------------with rxjs------------///

/* getCorporate():Observable<leader[]>{
  return of(LEADERS).pipe(delay(2000)) ;
  
   }

getFeaturedLeadre():Observable<leader> {
  return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000)) ;
  
   } */

   
}
