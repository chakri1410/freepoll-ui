import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Status } from 'src/app/models/status';
import { PollModel } from 'src/app/models/poll';
@Injectable({
  providedIn: 'root'
})


export class ApiService {
  _API: string;
  constructor(public http: HttpClient) {
    this._API = environment.API_URL + '/';
  }

  getStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(this._API + 'status');
  }

  addPoll(data: PollModel) : Observable<PollModel>{
    return this.http.put<PollModel>(this._API + 'poll/add', data);
  }

}
