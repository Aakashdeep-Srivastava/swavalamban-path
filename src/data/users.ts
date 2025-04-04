// data/users.js
export const users = [
    {
      id: 1,
      name: "Kavita Patel",
      email: "kavita@example.com",
      password: "password123", // In a real app, this would be hashed
      role: "entrepreneur",
      business: {
        name: "Kavita's Handicrafts",
        sector: "Handicrafts & Textiles",
        stage: "Growth",
        founded: "2022",
        location: "Jaipur, Rajasthan"
      },
      phoneNumber: "+91 9876543210",
      image: "/images/users/kavita.jpg"
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      email: "priya@example.com",
      password: "mentor123", // In a real app, this would be hashed
      role: "mentor",
      expertise: ["Business Strategy", "Market Research", "Business Planning"],
      organization: "IIM Ahmedabad",
      phoneNumber: "+91 9876543211",
      image: "/images/mentors/priya-sharma.jpg"
    },
    {
      id: 3,
      name: "Meenakshi Agarwal",
      email: "meenakshi@example.com",
      password: "mentor456", // In a real app, this would be hashed
      role: "mentor",
      expertise: ["Technology Startups", "Product Development", "Scaling Operations"],
      organization: "TechInnovate Solutions",
      phoneNumber: "+91 9876543212",
      image: "/images/mentors/meenakshi-agarwal.jpg"
    }
  ];