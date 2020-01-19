import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import {RecognizeRequest} from './recognize-request';
import {RecognizeResponse} from './recognize-response';

const NAME_AUTH_CODE = "Bearer ZmE2ZWRjMzA0MWY5NDZhZmJjNjY0MDJiMTAyOWUyY2Q6ZTczMzg4Y2QtNTZlYi00ZjU0LWJhNjMtYjg5ZWNlMWU3ZWYy";
const NAME_CONTENT_TYPE = "application/json";
const NAME_END_POINT = 'https://api.microblink.com';
const NAME_SERVICE_RECOGNIZE = '/recognize/execute';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  NAME_CONTENT_TYPE,
    'Authorization': NAME_AUTH_CODE
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  recognizeMicroblink(recognizeRequest:RecognizeRequest): Observable<RecognizeResponse> {
    console.log(JSON.stringify(recognizeRequest));
      return this.http.post<RecognizeResponse>(NAME_END_POINT + NAME_SERVICE_RECOGNIZE, JSON.stringify(recognizeRequest), httpOptions).pipe(
        //map(this.extractData)
        );
  }


  
}
