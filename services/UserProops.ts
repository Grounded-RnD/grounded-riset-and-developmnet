interface UserProops {
  fullname: string;
  email: string;
  phone: string;
  address: string;
  member_since: string;
  role: "User" | "Member" | "Co-Founder";
}

interface socialsProops extends UserProops {
  web: string;
  linkedin: string;
  instagram: string;
  github: string;
  whatsapp: string;
}

interface skillsProops extends UserProops {
  skills: string[];
  tech_stack: string[];
}

interface experienceProops extends UserProops {
  experience: string[];
}
