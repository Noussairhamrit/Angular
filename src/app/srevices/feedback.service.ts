import { Injectable } from '@angular/core';

/** */
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import {Feedback ,ContactType} from '../shared/feedback';
import {Observable} from 'rxjs';
 import {catchError} from 'rxjs/operators';
import {baseURL} from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

/** */

@Injectable({
  providedIn: 'root' 
})
export class FeedbackService {

  feedback :Feedback;
  contact = ContactType;

  constructor(private http : HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService ) { }

  postfeddback(feedback:Feedback):Observable<Feedback>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log('aaaaaaaaaaaa');
    return this.http.post<Feedback>(baseURL+'feedback' ,feedback,httpOptions )
    .pipe(catchError(this.processHTTPMsgService.handleError));
   
  }

}
