interface socialsProops {
  web: {
    title: string;
    href: string;
  };

  linkedin: {
    title: string;
    href: string;
  };

  instagram: {
    title: string;
    href: string;
  };

  github: {
    title: string;
    href: string;
  };

  whatsapp: {
    title: string;
    href: string;
  };
}

interface skillsProops extends socialsProops {
  skills: [
    {
      skill: string;
      tech_stack: string[];
    }
  ];
}

interface experienceProops extends skillsProops {
  experience: string[];
}

interface UserProops extends experienceProops {
  fullname: string;
  slug: string;
  img: any;
  email: string;
  phone: string;
  address: string;
  member_since: string;
  jabatan: string;
  bidang: string;
  role: "User" | "Member" | "Co-Founder";
}
