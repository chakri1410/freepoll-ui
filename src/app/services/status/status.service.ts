import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Status } from 'src/app/models/status';


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

