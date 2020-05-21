export class PollModel {
  public constructor(init?: Partial<PollModel>) {
    Object.assign(this, init);
}
  pollGuid: string;
  name: string;
  options: string[];
  type: PollOptionTypes;
  endDate: Date;
  duplicate: boolean;
}

export class PollViewModel{
  pollId:	number;
  name:	string;
  type:	number;
  duplicate:	number;
  enddate:	Date;
  createdBy:	number;
  createdDate:	Date;
  statusId:	number;
  updatedDate:	Date;
  updatedBy: number;
  pollGuid:	string;
  pollOptions: PollOptions[];
}

export class PollOptions{
  pollOptionId:	number;
  pollId:	number;
  optionText:	string;
  statusId:	number;
  orderId:	number;
  createdBy:	number;
  createdDate:	Date;
  updatedBy:	number;
  updatedDate:	Date;
}

export enum PollOptionTypes {
  radiobutton,
  checkbox
}
