const wix = (id, name) => {
  const encoded = encodeURIComponent(name);
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_400,h_400,al_c,q_85,enc_auto,quality_auto/${encoded}`;
};

export const NEFS_LOGO =
  "https://static.wixstatic.com/media/be2b91_61f874cd857548cda5d402b59a8b4844~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_auto,quality_auto/NEFS%20logo%20white%20borders.png";

export const NEFS_LOGO_COLOR =
  "https://static.wixstatic.com/media/be2b91_b60a6141daa34ebeb1f1f9e329d34142~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_auto,quality_auto/NEFS%20logo.png";

export const ABOUT_HERO =
  "https://static.wixstatic.com/media/be2b91_3234751518c44fb1a33dc286f72ecdea~mv2.jpeg/v1/fill/w_1200,h_900,al_c,q_80,enc_auto,quality_auto/WhatsApp%20Image%202025-09-01%20at%2017_10_15.jpeg";

export const HOMEPAGE_BG =
  "https://static.wixstatic.com/media/be2b91_68a9f35a24ed4876aef76d9f951e980b~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_80,enc_auto,quality_auto/be2b91_68a9f35a24ed4876aef76d9f951e980b~mv2.jpg";

export const sponsors = {
  platinum: [
    {
      name: "EY",
      logo: "https://static.wixstatic.com/media/be2b91_01b55f09f50b44b1908c3864196db4f3~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_auto,quality_auto/EY_idh3Sg1g92_1.png",
      description:
        'EY is one of the "Big Four" multinational professional services firms, providing Assurance, Tax, Consulting, and Strategy and Transactions services globally.',
    },
    {
      name: "Capital One",
      logo: "https://static.wixstatic.com/media/be2b91_2a6ee3ea5a56423cac28d7828c483d4e~mv2.png/v1/fill/w_300,h_110,al_c,q_85,enc_auto,quality_auto/idDuG1jJQ7_1762880669704.png",
      description:
        "Capital One is a major American bank holding company with European headquarters in Nottingham, specializing in credit cards, auto loans, and banking.",
    },
  ],
  gold: [
    {
      name: "UBS",
      logo: "https://static.wixstatic.com/media/be2b91_c2c8567fb45643f5bec3df458f5d5e52~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_auto,quality_auto/idO8-dZ76p_1763581137749.png",
      description:
        "UBS is a leading global financial services firm providing financial advice and solutions to private, institutional, and corporate clients worldwide.",
    },
    {
      name: "Fidelity Investments",
      logo: "https://static.wixstatic.com/media/be2b91_e7ebe607a7994509bbdeb6aa6766409d~mv2.png/v1/fill/w_300,h_95,al_c,q_85,enc_auto,quality_auto/idfu1zHY0m_1762880813186.png",
      description:
        "Fidelity Investments is one of the world's largest independent investment fund managers, focused on strengthening financial wellbeing.",
    },
    {
      name: "Wells Fargo",
      logo: "https://static.wixstatic.com/media/be2b91_b6471ca1c60f445cb306b3cacc4028be~mv2.png/v1/fill/w_300,h_30,al_c,q_85,enc_auto,quality_auto/idzPHELBqu_1762880872293.png",
      description:
        "Wells Fargo is the fourth-largest bank in the US by total assets, offering banking, mortgage, asset management, and wealth management.",
    },
  ],
  silver: [
    {
      name: "WorldQuant",
      logo: "https://static.wixstatic.com/media/be2b91_564e97225e9b4745aef292d4687840f1~mv2.png/v1/fill/w_240,h_68,al_c,q_85,enc_auto,quality_auto/Pink%20Poppy%20Flowers.png",
      description:
        "WorldQuant is a leading quantitative investment management firm utilizing data mining, statistics, and AI to develop strategies.",
    },
    {
      name: "Scotiabank",
      logo: "https://static.wixstatic.com/media/be2b91_6c70eb0e7ccd4bb489feb38c9a6f2caf~mv2.png/v1/fill/w_300,h_56,al_c,q_85,enc_auto,quality_auto/Scotiabank_id3Ga1ZJjW_1.png",
      description:
        'Scotiabank is one of Canada\'s "Big Five" banks, recognized as "Canada\'s most international bank" with operations across Latin America and the Caribbean.',
    },
  ],
  bronze: [
    {
      name: "Deutsche Bank",
      logo: "https://static.wixstatic.com/media/be2b91_5fd3f52fee47476c8d86f71b4e90b46c~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_auto,quality_auto/Deutsche%20Bank_id7Ee9EU3R_1.png",
      description:
        "Deutsche Bank is a leading German multinational investment bank and financial services company spanning 56 countries.",
    },
    {
      name: "Compass Lexecon",
      logo: "https://static.wixstatic.com/media/be2b91_45d57ecc62d94aeea145214e27e40dbe~mv2.jpeg/v1/fill/w_200,h_200,al_c,q_80,enc_auto,quality_auto/Pink%20Poppy%20Flowers.jpeg",
      description:
        "Compass Lexecon is a global leader in economic consulting, providing expert analysis for legal and regulatory proceedings.",
    },
    {
      name: "Oliver Wyman",
      logo: "https://static.wixstatic.com/media/be2b91_aa94d38335cd42fbb6f32d86f6c14eee~mv2.png/v1/fill/w_300,h_34,al_c,q_85,enc_auto,quality_auto/Oliver%20Wyman_idN3Npc_J7_1.png",
      description:
        "Oliver Wyman is a global leader in management consulting, combining deep industry knowledge with specialized expertise.",
    },
    {
      name: "FO Perspectives",
      logo: "https://static.wixstatic.com/media/be2b91_962674491c364278acd40c83d25fb34a~mv2.jpg/v1/fill/w_200,h_200,al_c,q_80,enc_auto,quality_auto/FO%20Perspectives.jpg",
      description:
        "FO Perspectives bridges the gap between employers and underrepresented talent through recruitment marketing and career development.",
    },
    {
      name: "Vinson Centre",
      logo: "https://static.wixstatic.com/media/be2b91_53f0782fa208432b88d775ecda0aa34b~mv2.png/v1/fill/w_200,h_142,al_c,q_85,enc_auto,quality_auto/Vinson%20Centre.png",
      description:
        "The Vinson Centre promotes understanding of Classical Liberalism, free markets, and entrepreneurship at the University of Buckingham.",
    },
  ],
};

export const divisions = [
  {
    slug: "general-committee",
    name: "General Committee",
    icon: "users",
    shortDesc: "The executive team overseeing all society operations.",
    description:
      "The General Committee is the executive body of NEFS, responsible for overseeing all society operations, coordinating divisions, managing large-scale events, and setting the strategic direction of the society. The committee is composed of 36 dedicated members who work tirelessly to deliver over 70 events per year.",
    members: [],
  },
  {
    slug: "investment-fund",
    name: "Investment Fund",
    icon: "trending-up",
    shortDesc: "Manage real portfolios and develop investment strategies.",
    description:
      "As one of the largest student-run investment funds in the UK, the NEFS Investment Fund boasts £44k+ AUM and 12 specialised teams. The Fund operates in an 8 month cycle, investing funds in sector-specific securities. Alongside its weekly team meetings, the Investment Fund has run 2 fund-wide training sessions in valuation and pitching, 3 rounds of a national inter-university trading competition and welcomed professionals from bulge bracket banks.",
    skills: [
      "Equity research",
      "Portfolio management",
      "Risk analysis",
      "Financial modelling",
      "Market presentation skills",
    ],
    members: [
      {
        name: "Muzamel Shah",
        role: "Director",
        image: wix(
          "be2b91_7c92652fde5c422bba719232c7fd19e4~mv2.png",
          "Muzamel Shah Background Removed.png"
        ),
      },
      {
        name: "Martin Schmilli",
        role: "Director",
        image: wix(
          "be2b91_3c85e4b851ef458b9d59fecd084004f9~mv2.png",
          "Martin Shmilli Background Removed.png"
        ),
      },
      {
        name: "Leonie Olu-Williams",
        role: "Vice-Director",
        image: wix(
          "be2b91_57e1a76b72d542448ffe49f18daff4a0~mv2.png",
          "Leonie Olu-Williams Background Removed.png"
        ),
      },
      {
        name: "Sami Hashmi",
        role: "Vice-Director",
        image: wix(
          "be2b91_f229fc4c0eca446bac71ed1ff9c60b93~mv2.png",
          "WhatsApp Image 2026-01-05 at 10_17 Background Removed_04.png"
        ),
      },
      {
        name: "Joshua Kerr-Shepherd",
        role: "Vice-Director",
        image: wix(
          "be2b91_969e4ffd2edb41a9a548623eb041a762~mv2.png",
          "Josh Kerr-Shepherd Background Removed.png"
        ),
      },
      {
        name: "Josh Groves",
        role: "Vice-Director",
        image: wix(
          "be2b91_4e0ff9e391964d16bdc75563d61eb509~mv2.png",
          "Josh Groves Background Removed.png"
        ),
      },
      {
        name: "Szymon Kopyciński",
        role: "Head of Systems",
        image: wix(
          "be2b91_6b424befa2b34e4d9e9dedb21323c46a~mv2.png",
          "Szymon Kopycinski Background Removed.png"
        ),
      },
    ],
  },
  {
    slug: "corporate-finance",
    name: "Corporate Finance Team",
    icon: "file-text",
    shortDesc: "Explore M&A, valuation, and corporate strategy.",
    description:
      "The Corporate Finance Team is a prestigious division of NEFS which aims to educate its members about the world of investment banking. We pride ourselves on delivering informative and engaging workshops, financial modeling tutorials and skills-based sessions to develop a strong understanding of M&A and Capital Markets. The division proves highly competitive every year, with only 24 places and successful analysts receiving Spring and Summer Internships at top firms.",
    skills: [
      "DCF modelling",
      "Comparable company analysis",
      "LBO modelling",
      "Deal structuring",
      "Pitch book creation",
    ],
    members: [
      {
        name: "Demi Stamos",
        role: "Director",
        image: wix(
          "be2b91_3cccba007e3e4d6abf0c256bd27098ec~mv2.png",
          "Demi Stamos Background Removed.png"
        ),
      },
      {
        name: "Dominic Rae",
        role: "Director",
        image: wix(
          "be2b91_4ca0f6be8029407ea1c2128c7ad45bf1~mv2.png",
          "Dominic Rae Background Removed.png"
        ),
      },
      {
        name: "Kabir Siddhu",
        role: "Director",
        image: wix(
          "be2b91_ed0bbdcde4e042d58597c582cf7fab40~mv2.png",
          "Kabir Siddhu Background Removed.png"
        ),
      },
    ],
  },
  {
    slug: "research",
    name: "Research",
    icon: "search",
    shortDesc: "Publish in-depth economic and financial research.",
    description:
      "The Research division provides a unique learning experience for members by enhancing skills in analysis, reporting and evaluating data from numerous reputable sources. Each member is assigned a topic on a rotational basis ranging from currencies to commodities, and writes a report compiled into a weekly newsletter (called the Market Wrap Up) available to all 4,000 members. This year, 25 Research Analysts cover 13 global markets, supported by 3 Senior Editors, a Multimedia Analyst, and 2 Directors.",
    skills: [
      "Economic research & writing",
      "Market analysis",
      "Critical thinking",
      "Report publication",
      "Presenting findings",
    ],
    members: [
      {
        name: "Luke Labuschagne",
        role: "Director",
        image: wix(
          "be2b91_fcf0c61001204db686c01207c06c32fe~mv2.png",
          "Luke Labuschagne Background Removed.png"
        ),
      },
      {
        name: "Shakanya Osahon",
        role: "Director",
        image: wix(
          "be2b91_49a62919b8214c098c4d3bbeb94488f6~mv2.png",
          "Shakanya Osahon Background Removed.png"
        ),
      },
    ],
  },
  {
    slug: "consulting",
    name: "Consulting",
    icon: "layers",
    shortDesc: "Tackle real-world business problems with analytical rigour.",
    description:
      "The Consulting division provides valuable insight and experience for students interested in consulting as a potential career. Structured with 3 Directors and 30 members, the division offers weekly sessions taking an in-depth look at major areas of consulting. Members are well prepared for spring, summer and graduate applications through extensive case study practice, framework building and technical skills workshops. Members also take part in consulting projects in real life.",
    skills: [
      "Case study frameworks",
      "Market sizing",
      "Profitability analysis",
      "Brainstorming",
      "Presentation skills",
    ],
    members: [
      {
        name: "Alkistis Xanthi",
        role: "Director",
        image: wix(
          "be2b91_c9aca106cec54ce896f10fd1def7ff33~mv2.png",
          "Alkitis Xanthi Background Removed.png"
        ),
      },
      {
        name: "Geetanjali Sasapu",
        role: "Director",
        image: wix(
          "be2b91_9c4667d3c82547d9a5aef98964f5572d~mv2.png",
          "Geetanjali Sasapu Background Removed.png"
        ),
      },
      {
        name: "Aadhi Senthivel",
        role: "Director",
        image: wix(
          "be2b91_b97328dd13044e3587bbe56115557500~mv2.png",
          "Aadhi Senthivel Background Removed.png"
        ),
      },
    ],
  },
  {
    slug: "quant",
    name: "Quant",
    icon: "cpu",
    shortDesc: "Quantitative analysis, algorithmic trading, and data science.",
    description:
      "The Quant Division aims to demystify technology and quantitative finance within the financial industry. From software engineering to quantitative trading, our weekly sessions unpack the vast opportunities available. Through a combination of industry experience and speaker events, we prepare our team of analysts for the specialised internship application process.",
    skills: [
      "Python for finance",
      "Statistical modelling",
      "Algorithmic trading strategies",
      "Machine learning basics",
      "Time series analysis",
    ],
    members: [
      {
        name: "Fahim Hamid",
        role: "Head of Technology",
        image: wix(
          "55d98a_bd711467d9ef434fad15f8196a346e96~mv2.jpeg",
          "55d98a_bd711467d9ef434fad15f8196a346e96~mv2.jpeg"
        ),
      },
      {
        name: "Sakshi Upadhyay",
        role: "Director",
        image: wix(
          "be2b91_b1a766bf918144e7978c28474e98e886~mv2.png",
          "Sakshi Upadhyay Background Removed.png"
        ),
      },
      {
        name: "Shreyan Das",
        role: "Director",
        image: wix(
          "be2b91_4d9ffca664ec4cce82997bd57d150de0~mv2.png",
          "Shreyan Das Background Removed.png"
        ),
      },
    ],
  },
  {
    slug: "alternative-investments",
    name: "Alternative Investments",
    icon: "globe",
    shortDesc: "Venture capital, private equity, hedge funds, and more.",
    description:
      "The Alternative Investments Team is NEFS' newest division, aimed to educate students about the alternatives industry. Our division includes sessions on the latest trends and the technical skills needed for success in the field. We also introduce projects to ensure our analysts can develop relevant practical experience. Members have opportunities to network with industry professionals and build a strong peer network, with support throughout the internship application process.",
    skills: [
      "PE deal analysis",
      "VC due diligence",
      "Hedge fund strategies",
      "Real estate valuation",
      "Portfolio diversification",
    ],
    members: [
      {
        name: "Rohit Srisakthivel",
        role: "Director",
        image: wix(
          "be2b91_81b66824e4444b929113e7c25c3b12ba~mv2.png",
          "Rohit Srisakthivel Background Removed.png"
        ),
      },
      {
        name: "Saayoni Paul",
        role: "Director",
        image: wix(
          "be2b91_0ad96a7c2b4f466fab7e6874fdc43726~mv2.png",
          "Saayoni Paul Background Removed.png"
        ),
      },
      {
        name: "Maciej Bonus",
        role: "Director",
        image: wix(
          "be2b91_fce2b16515d74fd0ba08d8b78ac2eb66~mv2.png",
          "Maciej Bonus Headshot Background Removed.png"
        ),
      },
    ],
  },
  {
    slug: "global-economy",
    name: "Global Economy",
    icon: "globe-2",
    shortDesc: "Macro trends, geopolitics, and international economics.",
    description:
      "The Global Economy division is tailored to aid young economists in pursuing their career in the public sector or at economic consultancies. It provides an in-depth insight into economic policies and their effects on all sectors of the economy. With 30 members and two Co-Directors, the division develops research, analytical and public speaking skills through weekly sessions presenting and debating policy case studies, with opportunities for sessions with industry professionals.",
    skills: [
      "Macroeconomic analysis",
      "Geopolitical research",
      "Economic forecasting",
      "Policy analysis",
      "International trade research",
    ],
    members: [
      {
        name: "Maddy Roberts",
        role: "Director",
        image: wix(
          "be2b91_770cf8b1d8784e35bbe1a73fc8a06ec0~mv2.png",
          "Maddy Roberts Background Removed.png"
        ),
      },
      {
        name: "Thomas Adnams",
        role: "Director",
        image: wix(
          "be2b91_00bb56e20c794e879ab49fd812b803fb~mv2.png",
          "Thomas Adnams Background Removed.png"
        ),
      },
    ],
  },
  {
    slug: "women-in-finance",
    name: "Women in Finance",
    icon: "heart",
    shortDesc: "Championing diversity and inclusion in finance.",
    description:
      'The Women in Finance division champions diversity and inclusion in the finance industry. Through mentorship programmes, networking events with female leaders, confidence-building workshops, and panel discussions, the division empowers all students to succeed. In 2024, NEFS launched its first Women in Finance Conference themed "Empower and Inspire", attracting over 100 students from universities across the UK.',
    skills: [
      "Mentorship programmes",
      "Networking with female leaders",
      "Confidence-building workshops",
      "Panel discussions",
      "Industry talks",
    ],
    members: [
      { name: "Soraya Johal", role: "Director", image: null },
      { name: "Amber Elliott", role: "Director", image: null },
      { name: "Aaliyah Patel", role: "Director", image: null },
      { name: "Aafreen Nizam", role: "Director", image: null },
    ],
  },
];
