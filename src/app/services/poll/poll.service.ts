import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { PollModel } from 'src/app/models/poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {

constructor(public api: ApiService) { }

public addPoll(data: PollModel) {
  return this.api.addPoll(data);
}

public getPoll(pollguid: string) {
  return this.api.getPoll(pollguid);
}
}
