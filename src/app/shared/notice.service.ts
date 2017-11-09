import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Notice } from './notice';

@Injectable()
export class NoticeService {
  private noticesUrl = 'api/notices';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getNotices(): Promise<Notice[]> {
    return this.http.get(this.noticesUrl)
               .toPromise()
               .then(response => {
                 return response.json() as Notice[];})
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
