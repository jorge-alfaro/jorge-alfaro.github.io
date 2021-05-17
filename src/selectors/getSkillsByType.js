import { skills } from "../components/data/skills";

export const getSkillsByType = (type) => {
  const valid = ["logo"];
  if (!valid.includes(type)) {
    throw new Error(`Skill "${type}" It's not correct`);
  }
  return skills.filter((logo) => logo.type === type);
};
