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
  PollId:	number;
  Name:	string;
  Type:	number;
  Duplicate:	number;
  Enddate:	Date;
  CreatedBy:	number;
  CreatedDate:	Date;
  StatusId:	number;
  UpdatedDate:	Date;
  UpdatedBy: number;
  PollGuid:	string;
  PollOptions: PollOptions[]
}

export class PollOptions{
  PollOptionId:	number;
  PollId:	number;
  OptionText:	string;
  StatusId:	number;
  OrderId:	number;
  CreatedBy:	number;
  CreatedDate:	Date;
  UpdatedBy:	number;
  UpdatedDate:	Date;
}

export enum PollOptionTypes {
  radiobutton,
  checkbox
}
