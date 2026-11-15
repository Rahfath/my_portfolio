export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  external?: boolean;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  highlight?: string;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  navLinks: NavLink[];
}
