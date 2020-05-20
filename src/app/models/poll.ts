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

export enum PollOptionTypes {
  radiobutton,
  checkbox
}
