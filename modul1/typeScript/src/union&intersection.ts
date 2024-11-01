{
  //union type
  type FrontendDev = "fakibus" | "junearDev";
  const NewDev: FrontendDev = "fakibus";
  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "o+" | "o-" | "ab+";
  };
  const user1: User = {
    name: "rezwan",
    email: "r@gmail",
    gender: "female",
    bloodGroup: "o+",
  };

  //interSection
  type FontendDevloper = {
    skills: string[];
    degignation1: "fontend-dev";
  };
  type BakendendDevloper = {
    skills: string[];
    degignation2: "Bakend-dev";
  };
  type FullStackDev = FontendDevloper & BakendendDevloper;
  const fullStackDev: FullStackDev = {
    skills: ["html", "css"],
    degignation1: "fontend-dev",
    degignation2: "Bakend-dev",
  };
}
