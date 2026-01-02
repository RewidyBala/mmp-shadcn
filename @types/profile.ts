import { SelectOption } from "./common";

export type Profile = {
  basic: ProfileBasic;
  religion: ProfileReligion;
  nameCard: ProfileNameCard;
  education: ProfileEducation;
  location: ProfileLocation;

  // family: ProfileFamily;
  // birth: ProfileBirth;
  // horoscope: ProfileHoroscope;
  // hobbies: string[];
  // verification: ProfileVerification;
  // pictures: ProfilePic[];
};

export type ProfileBasic = {
  profileId: string;
  name: string;
  age: number;
  height: number;
  profileCompletion: number;
  about: string;
  createdBy: string;
  created: string;
  dateOfBirth: string;
  maritalStatus: string;
  motherTongue: string;
  mobileNumber: string;
  weight: number;
  bodyType: number;
  physicalStatus: string;
  drinkingHabit: string;
  smokingHabit: string;
  eatingHabit: string;
  gender: "MALE" | "FEMALE";
};

export type ProfileReligion = {
  religion: SelectOption;
  caste: SelectOption;
  subCaste: SelectOption;
  star: string;
  moonSign: string;
  doshamOption: string;
  dosham: string[];
};

export type ProfileNameCard = {
  name: string;
  age: number;
  height: number;
  religion: string;
  caste: string;
  education: string;
  occupation: string;
  city: string;
  district: string;
  state: string;
  profileId: string;
};

export type EducationCourse = {
  educationCategory: string;
  degree: string;
  course: string;
  college: string;
  university: string;
  educationOrder: number;
  startYear: number;
  endYear: number;
};
export type ProfileEducation = {
  education: Record<string, EducationCourse>;
  educationInDetail: string;
  occupation: string;
  college: SelectOption[];
  occupationType: string;
  organization: SelectOption;
  salary: number;
};

export type ProfileLocation = {
  country: SelectOption;
  state: SelectOption;
  district: SelectOption;
  city: SelectOption;
  citizenship: SelectOption;
  residentStatus: number;
  distance: number;
};
