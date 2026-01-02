// Options arrays for dropdowns and selects

// export const HEIGHT_OPTIONS = Array.from({ length: 41 }, (_, i) => {
//   const heightCm = 140 + i * 2;
//   const feet = Math.floor(heightCm / 30.48);
//   const inches = Math.round((heightCm % 30.48) / 2.54);
//   return {
//     value: heightCm.toString(),
//     label: `${heightCm}cm (${feet}'${inches}")`,
//   };
// });

export const HEIGHT_OPTIONS = [
  { value: 3.0, label: { feet: 3, inch: 0 } },
  { value: 3.1, label: { feet: 3, inch: 1 } },
  { value: 3.2, label: { feet: 3, inch: 2 } },
  { value: 3.3, label: { feet: 3, inch: 3 } },
  { value: 3.4, label: { feet: 3, inch: 4 } },
  { value: 3.5, label: { feet: 3, inch: 5 } },
  { value: 3.6, label: { feet: 3, inch: 6 } },
  { value: 3.7, label: { feet: 3, inch: 7 } },
  { value: 3.8, label: { feet: 3, inch: 8 } },
  { value: 3.9, label: { feet: 3, inch: 9 } },
  { value: 3.1, label: { feet: 3, inch: 10 } },
  { value: 3.11, label: { feet: 3, inch: 11 } },
  { value: 4.0, label: { feet: 4, inch: 0 } },
  { value: 4.1, label: { feet: 4, inch: 1 } },
  { value: 4.2, label: { feet: 4, inch: 2 } },
  { value: 4.3, label: { feet: 4, inch: 3 } },
  { value: 4.4, label: { feet: 4, inch: 4 } },
  { value: 4.5, label: { feet: 4, inch: 5 } },
  { value: 4.6, label: { feet: 4, inch: 6 } },
  { value: 4.7, label: { feet: 4, inch: 7 } },
  { value: 4.8, label: { feet: 4, inch: 8 } },
  { value: 4.9, label: { feet: 4, inch: 9 } },
  { value: 4.1, label: { feet: 4, inch: 10 } },
  { value: 4.11, label: { feet: 4, inch: 11 } },
  { value: 5.0, label: { feet: 5, inch: 0 } },
  { value: 5.1, label: { feet: 5, inch: 1 } },
  { value: 5.2, label: { feet: 5, inch: 2 } },
  { value: 5.3, label: { feet: 5, inch: 3 } },
  { value: 5.4, label: { feet: 5, inch: 4 } },
  { value: 5.5, label: { feet: 5, inch: 5 } },
  { value: 5.6, label: { feet: 5, inch: 6 } },
  { value: 5.7, label: { feet: 5, inch: 7 } },
  { value: 5.8, label: { feet: 5, inch: 8 } },
  { value: 5.9, label: { feet: 5, inch: 9 } },
  { value: 5.1, label: { feet: 5, inch: 10 } },
  { value: 5.11, label: { feet: 5, inch: 11 } },
  { value: 6.0, label: { feet: 6, inch: 0 } },
  { value: 6.1, label: { feet: 6, inch: 1 } },
  { value: 6.2, label: { feet: 6, inch: 2 } },
  { value: 6.3, label: { feet: 6, inch: 3 } },
  { value: 6.4, label: { feet: 6, inch: 4 } },
  { value: 6.5, label: { feet: 6, inch: 5 } },
  { value: 6.6, label: { feet: 6, inch: 6 } },
  { value: 6.7, label: { feet: 6, inch: 7 } },
  { value: 6.8, label: { feet: 6, inch: 8 } },
  { value: 6.9, label: { feet: 6, inch: 9 } },
  { value: 6.1, label: { feet: 6, inch: 10 } },
  { value: 6.11, label: { feet: 6, inch: 11 } },
  { value: 7.0, label: { feet: 7, inch: 0 } },
  { value: 7.1, label: { feet: 7, inch: 1 } },
  { value: 7.2, label: { feet: 7, inch: 2 } },
  { value: 7.3, label: { feet: 7, inch: 3 } },
  { value: 7.4, label: { feet: 7, inch: 4 } },
  { value: 7.5, label: { feet: 7, inch: 5 } },
  { value: 7.6, label: { feet: 7, inch: 6 } },
  { value: 7.7, label: { feet: 7, inch: 7 } },
  { value: 7.8, label: { feet: 7, inch: 8 } },
  { value: 7.9, label: { feet: 7, inch: 9 } },
  { value: 7.1, label: { feet: 7, inch: 10 } },
  { value: 7.11, label: { feet: 7, inch: 11 } },
  { value: 8.0, label: { feet: 8, inch: 0 } },
] as const;

export const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
] as const;

export const MARITAL_STATUS_OPTIONS = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
] as const;

export const RELIGION_OPTIONS = [
  { value: "hinduism", label: "Hinduism" },
  { value: "islam", label: "Islam" },
  { value: "christianity", label: "Christianity" },
  { value: "sikhism", label: "Sikhism" },
  { value: "buddhism", label: "Buddhism" },
  { value: "jainism", label: "Jainism" },
  { value: "other", label: "Other" },
] as const;

export const CASTE_OPTIONS = [
  { value: "general", label: "General" },
  { value: "obc", label: "OBC" },
  { value: "sc", label: "SC" },
  { value: "st", label: "ST" },
  { value: "other", label: "Other" },
] as const;

export const EDUCATION_OPTIONS = [
  { value: "high_school", label: "High School" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "phd", label: "PhD" },
  { value: "diploma", label: "Diploma" },
  { value: "other", label: "Other" },
] as const;

export const OCCUPATION_OPTIONS = [
  { value: "employed", label: "Employed" },
  { value: "self_employed", label: "Self Employed" },
  { value: "business", label: "Business" },
  { value: "student", label: "Student" },
  { value: "unemployed", label: "Unemployed" },
  { value: "retired", label: "Retired" },
] as const;

export const INCOME_RANGE_OPTIONS = [
  { value: "0-3", label: "0 - 3 Lakhs" },
  { value: "3-5", label: "3 - 5 Lakhs" },
  { value: "5-7", label: "5 - 7 Lakhs" },
  { value: "7-10", label: "7 - 10 Lakhs" },
  { value: "10-15", label: "10 - 15 Lakhs" },
  { value: "15-20", label: "15 - 20 Lakhs" },
  { value: "20+", label: "20+ Lakhs" },
] as const;

export const COUNTRY_OPTIONS = [
  { value: "india", label: "India" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "other", label: "Other" },
] as const;

export const STATE_OPTIONS = [
  { value: "andhra_pradesh", label: "Andhra Pradesh" },
  { value: "karnataka", label: "Karnataka" },
  { value: "kerala", label: "Kerala" },
  { value: "tamil_nadu", label: "Tamil Nadu" },
  { value: "telangana", label: "Telangana" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "delhi", label: "Delhi" },
  { value: "other", label: "Other" },
] as const;

export const SMOKING_OPTIONS = [
  { value: "never", label: "Never" },
  { value: "occasionally", label: "Occasionally" },
  { value: "regularly", label: "Regularly" },
] as const;

export const DRINKING_OPTIONS = [
  { value: "never", label: "Never" },
  { value: "occasionally", label: "Occasionally" },
  { value: "regularly", label: "Regularly" },
] as const;

export const DIET_OPTIONS = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "non_vegetarian", label: "Non-Vegetarian" },
  { value: "eggetarian", label: "Eggetarian" },
  { value: "vegan", label: "Vegan" },
] as const;
