export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  contribution: string;
  maturity: string;
  technologies: string[];
  problem: string;
  architecture: string;
  verification: string[];
  limitations: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "quant-trader",
    title: "Quant Trader",
    category: "Research software",
    summary:
      "Market-research software for inspectable data workflows, analysis overlays, and experiment provenance.",
    contribution:
      "Designed the system around traceable market data, reproducible calculations, and a React/FastAPI split.",
    maturity:
      "Research software profile; it is not presented as financial advice or profitable trading evidence.",
    technologies: ["FastAPI", "React", "Market data"],
    problem:
      "Exploratory trading research can become difficult to audit when data fetching, derived indicators, and decisions live in separate notebooks or scripts.",
    architecture:
      "The project is presented as a service-backed analysis application: FastAPI coordinates data access and caching, while React/Vite surfaces the research workflow in a browser interface.",
    verification: [
      "Project profile emphasizes data provenance and repeatable calculations.",
      "Future live demos require separate backend hosting because GitHub Pages is static."
    ],
    limitations: [
      "No claims are made about profitable trading performance.",
      "External data availability and market conditions are outside the static website."
    ],
    links: [{ label: "Code", href: "https://github.com/JiaheJiang/quant-trader" }],
    featured: true
  },
  {
    slug: "w-network",
    title: "W-Network",
    category: "Product prototype",
    summary:
      "A Node/JavaScript social matching prototype with profile, matching, messaging, and mobile-oriented interface work.",
    contribution:
      "Shaped the application around product flows and reusable domain behavior rather than isolated screens.",
    maturity: "Prototype; demonstrations should use synthetic profiles unless usage evidence is added.",
    technologies: ["Node.js", "JavaScript", "Mobile UI"],
    problem:
      "A matching application needs clear interaction loops: profile creation, discovery, messaging, and return visits.",
    architecture:
      "The project profile describes a JavaScript application organized around user profiles, matching state, and messaging surfaces, with mobile layout decisions treated as product constraints.",
    verification: [
      "Project maturity is stated explicitly.",
      "Future demos should avoid real user data."
    ],
    limitations: [
      "No deployment or production usage claim is included.",
      "Privacy and moderation requirements would need deeper work before public operation."
    ],
    links: [{ label: "Code", href: "https://github.com/JiaheJiang/W-Network" }],
    featured: true
  },
  {
    slug: "cosmetic-warehouse",
    title: "Cosmetic Warehouse",
    category: "Desktop application",
    summary:
      "A Java/Swing warehouse application demonstrating shared domain logic, persistence, interface structure, and tests.",
    contribution:
      "Presented the project as a maintainable desktop system with clear data and interface responsibilities.",
    maturity: "Course or portfolio application; screenshots should use the repository's documented assets.",
    technologies: ["Java", "Swing", "Persistence"],
    problem:
      "Inventory workflows need consistent product records, update paths, and user-facing checks without mixing interface code with domain rules.",
    architecture:
      "The project profile emphasizes separation between Swing interface code, domain behavior, and persistence so the application can be reasoned about and tested.",
    verification: [
      "The project is described consistently as Swing.",
      "Documented tests and screenshots should be linked after checking the repository assets."
    ],
    limitations: [
      "No warehouse deployment claim is made.",
      "Screenshots should be verified before adding them to the site."
    ],
    links: [{ label: "Code", href: "https://github.com/JiaheJiang/Cosmetic_Warehouse_App" }]
  },
  {
    slug: "afdm-detector",
    title: "GNN AFDM Detector",
    category: "Research code",
    summary:
      "Public research code documenting detector comparisons for AFDM signal detection.",
    contribution:
      "Connects software artifacts to the AFDM research story while keeping performance claims scoped.",
    maturity: "Research code linked from the AFDM research overview.",
    technologies: ["GNN", "AFDM", "Python"],
    problem:
      "Research readers need a code artifact that clarifies which detector variants and experiment settings were compared.",
    architecture:
      "The project is framed as reproducible research code rather than an application server.",
    verification: [
      "The site links this project to the AFDM research page.",
      "Claimed results remain tied to documented settings."
    ],
    limitations: [
      "No browser demo is included.",
      "Detailed figure-to-configuration mapping should be checked before launch."
    ],
    links: [{ label: "Code", href: "https://github.com/JiaheJiang/GNN_AFDM_detector" }]
  },
  {
    slug: "breast-cancer-survival-analysis",
    title: "Breast Cancer Surgery Survival Analysis",
    category: "Statistical analysis",
    summary:
      "A retrospective classification exercise using kNN, train/test splits, and cross-validation.",
    contribution:
      "Presents the repository as a historical-dataset analysis rather than a clinical tool.",
    maturity: "Compact analysis entry.",
    technologies: ["kNN", "Cross-validation", "Classification"],
    problem:
      "Historical medical datasets require cautious language so exploratory classification is not mistaken for clinical recommendation.",
    architecture:
      "The case summary focuses on data scope, train/test evaluation, and model comparison.",
    verification: [
      "Language avoids implying surgery causes the observed outcome.",
      "Clinical usefulness is not claimed."
    ],
    limitations: [
      "Retrospective data cannot establish treatment effects.",
      "The site does not present the analysis as medical advice."
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/JiaheJiang/5-Year-Survival-Rate-After-Breast-Cancer-Surgery"
      }
    ]
  },
  {
    slug: "student-success-parental-education",
    title: "Student Success and Parental Education",
    category: "Statistical analysis",
    summary:
      "A statistical analysis of association between student outcomes and parental education variables.",
    contribution:
      "Uses association language and keeps the dataset scope visible.",
    maturity: "Compact analysis entry.",
    technologies: ["Statistics", "Data analysis", "Reporting"],
    problem:
      "Education datasets can invite causal overreading when the analysis supports association rather than intervention claims.",
    architecture:
      "The project is presented as a structured analysis with dataset scope, method, and report outputs.",
    verification: [
      "Causal wording is avoided.",
      "Dataset scope is treated as part of the conclusion."
    ],
    limitations: [
      "No causal claim about parental education is made.",
      "Generalization depends on the dataset and sampling frame."
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/JiaheJiang/Student-Success-Parental-Education"
      }
    ]
  }
];
