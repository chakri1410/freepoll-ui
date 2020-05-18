export class PollModel {
  pollGuid: string;
  name: string;
  options: string[];
  type: PollOptionTypes;
  endDate: Date;
  duplicate: boolean;
}

export enum PollOptionTypes {
  checkbox,
  radiobutton
}
