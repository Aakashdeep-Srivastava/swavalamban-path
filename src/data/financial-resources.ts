// data/financial-resources.js
export const financialResources = [
    {
      id: 1,
      title: "Small Business Loans",
      provider: "State Bank of India",
      description: "Loans tailored for women entrepreneurs with business plans showing potential for growth.",
      interestRate: "9.5% - 12.5%",
      eligibility: "Women-owned businesses with minimum 6 months of operation",
      requiredDocuments: [
        "Identity & Address Proof",
        "Business Registration Documents",
        "6 months Bank Statements",
        "ITR for last 2 years (if applicable)",
        "Projected Financial Statements"
      ],
      benefits: ["Collateral-free loans up to ₹5 lakhs", "Flexible repayment options", "Quick processing"],
      applicationLink: "#",
      category: "loan",
      image: "/images/financial/sbi-loan.jpg"
    },
    {
      id: 2,
      title: "Micro-Enterprise Development Programme",
      provider: "SIDBI",
      description: "Financial assistance for women entrepreneurs in micro-enterprises across various sectors.",
      interestRate: "8.5% - 10.5%",
      eligibility: "Women-owned micro-enterprises with viable business models",
      requiredDocuments: [
        "Identity & Address Proof",
        "Business Plan",
        "Quotations for Machinery/Equipment",
        "Proof of Business Premises",
        "Two Reference Letters"
      ],
      benefits: ["Loans up to ₹10 lakhs", "Lower interest rates", "Business development support"],
      applicationLink: "#",
      category: "loan",
      image: "/images/financial/sidbi-loan.jpg"
    },
    {
      id: 3,
      title: "Women Entrepreneurship Platform Fund",
      provider: "NITI Aayog",
      description: "Grant program for innovative women-led startups addressing social challenges.",
      grantAmount: "Up to ₹5 lakhs",
      eligibility: "Women-led startups with innovative solutions for social challenges",
      requiredDocuments: [
        "Detailed Project Proposal",
        "Business Registration",
        "Team Profile",
        "Prototype/MVP Details",
        "Impact Assessment Plan"
      ],
      benefits: ["Non-repayable grant", "Mentorship support", "Networking opportunities"],
      applicationLink: "#",
      category: "grant",
      image: "/images/financial/niti-grant.jpg"
    },
    {
      id: 4,
      title: "Angel Investment Network",
      provider: "SheCapital",
      description: "Angel investment platform connecting women entrepreneurs with women investors.",
      investmentRange: "₹25 lakhs - ₹1 crore",
      eligibility: "Women-led startups with scalable business models and growth potential",
      requiredDocuments: [
        "Detailed Business Plan",
        "Financial Projections for 3 years",
        "Cap Table",
        "Market Analysis",
        "Team Background"
      ],
      benefits: ["Strategic mentorship", "Network access", "Follow-on funding opportunities"],
      applicationLink: "#",
      category: "investment",
      image: "/images/financial/shecapital.jpg"
    },
    {
      id: 5,
      title: "Skill Development Voucher",
      provider: "Ministry of Skill Development & Entrepreneurship",
      description: "Financial assistance for skill development and training for women entrepreneurs.",
      voucherAmount: "Up to ₹25,000",
      eligibility: "Women entrepreneurs looking to upgrade skills relevant to their business",
      requiredDocuments: [
        "Identity Proof",
        "Business Registration (if applicable)",
        "Training Program Details",
        "Statement of Purpose",
        "Letter from Training Provider"
      ],
      benefits: ["Covers training costs", "Flexibility in choosing training programs", "Certification support"],
      applicationLink: "#",
      category: "grant",
      image: "/images/financial/skill-voucher.jpg"
    }
  ];