import { Component, OnInit,Inject } from '@angular/core';
/**** */
import {leader} from '../shared/leader'
import {LEADERS} from '../shared/leaders'
import {LeaderService} from '../srevices/leader.service'
/** */

import { flyInOut,expand } from '../animations/app.animation';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {
  
  leadres :leader[] =LEADERS;

  constructor(private _leaderservice:LeaderService,
     @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this._leaderservice.getCorporate().subscribe( leaders => this.leadres =leaders )
  }

}
