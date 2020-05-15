import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  public statuses: Status[];
  constructor(public api: ApiService) {
  }

  getStatus() {
    return this.api.getStatus();
  }

}


export class Status {
  statusid: number;
  statusname: string;
}
