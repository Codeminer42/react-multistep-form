export enum Steps {
  PersonalInformation = "PersonalInformation",
  BusinessInformation = "BusinessInformation",
  ReviewSubmit = "ReviewSubmit",
}

export interface Step {
  order: number;
  label: string;
}
