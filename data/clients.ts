const data: {
  logo: string;
  name: string;
  link: string;
  needBg?: boolean;
  row?: number;
  col?: number;
  projects: {
    link: string;
    name: string;
    tags: string[];
    description: string;
    screenshots: {
      path: string;
      caption: string;
    }[];
  }[];
}[] = [
  {
    logo: "./travelbank-logo.png",
    name: "Travel Bank",
    link: "https://travelbank.com",
    projects: [
      {
        link: "https://slack.com/apps/A01EHHDD29F-travelbank",
        name: "Travelbank's Slackapp",
        tags: ["slack", "app", "typescript", "boltjs", "react"],
        description: `Travelbank's slack app allows users to directly contact Travelbank support over slack DMs making support more seamless and creating good experience for users. 

The slack app was developed in typescript using the [bolt](https://slack.dev/bolt-js/) framework by slack.`,
        screenshots: [
          {
            path: "/static/projects/tb1.png",
            caption: "Slack interaction",
          },
          {
            path: "/static/projects/tb2.png",
            caption: "Add to slack button",
          },
        ],
      },
    ],
  },
  {
    logo: "./TechChange-logo.png",
    link: "https://www.techchange.org/",
    name: "Tech Change",
    projects: [
      {
        link: "https://www.techchange.org/",
        name: "Calculators",
        tags: [
          "techchange",
          "calculator",
          "ant-design",
          "react",
          "typescript",
          "spreadsheets",
        ],
        description: `A number of components were created that were embedded on 
techchange's community health courses adding to the interactive experience.

They are being used on the following courses:

- [Financing Community Health Programs for Scale and Sustainability [Self-paced]](https://communityhealthacademy.course.tc/catalog?type=financing-community-health-programs-for-scale-and-sustainability-course-series)
- [Financing Community Health Programs for Scale and Sustainability [Guided Journey]](https://communityhealthacademy.course.tc/catalog?type=financing-community-health-programs-for-scale-and-sustainability-course-series-guided-journey)

Specifically, the components are being used in both journey's course 4, "Making 
the Case". This course explores how and why we make the case for 
investing in community health systems. Making the case is defined as using 
convincing arguments to persuade someone that investing in community health 
is important. Strong reasoning and evidence are essential in convincing 
funders to invest. Tailoring arguments to your specific context can provide 
an even more convincing case to obtain financing. 

These excel-like components were developed with react and ant.design react
component library.`,
        screenshots: [
          {
            path: "/static/projects/tc1.png",
            caption: "Costing Output",
          },
          {
            path: "/static/projects/tc2.png",
            caption: "Productivity Costing",
          },
          {
            path: "/static/projects/tc3.png",
            caption: "ROI Calculator",
          },
          {
            path: "/static/projects/tc4.png",
            caption: "Benefit per life saved",
          },
          {
            path: "/static/projects/tc5.png",
            caption: "Employment Calculation",
          },
          {
            path: "/static/projects/tc6.png",
            caption: "Insurance Calculation",
          },
          {
            path: "/static/projects/tc7.png",
            caption: "Malaria outpatient calculation 1",
          },
          {
            path: "/static/projects/tc8.png",
            caption: "Malaria inpatient calculation 2",
          },
          {
            path: "/static/projects/tc9.png",
            caption: "Malaria inpatient calculation 1",
          },
          {
            path: "/static/projects/tc10.png",
            caption: "Malaria outpatient calculation 2",
          },
        ],
      },
    ],
  },
  {
    logo: "./byte-logo.png",
    link: "https://getbyte.app/",
    name: "Byte",
    projects: [
      {
        link: "https://getbyte.app/",
        name: "Byte backend scaling and refactoring",
        tags: [
          "typescript",
          "express",
          "nodejs",
          "mongodb",
          "influxdb",
          "refactor",
        ],
        description: `
- Refactored all the backend code from node.js to typescript inheriting all typescript benefits to the codebase.
- Broken down the backend system into fetcher, websocket, alert, and backend components. Each of which can be scaled individually for selected backends.`,
        screenshots: [
          {
            path: "/static/projects/byte2.png",
            caption: "Byte app screenshots",
          },
        ],
      },
    ],
  },
  {
    logo: "./refactoring-guru-logo.png",
    link: "https://refactoring.guru/",
    name: "Refactoring Guru",
    projects: [
      {
        name: "Refactoring Guru Python Implementation Example",
        tags: ["refactoring", "guru"],
        link:
          "https://github.com/RefactoringGuru/design-patterns-python/commit/0b6336668e37e1ad8117ab20d18b9efa66c55200",
        description:
          "Reference implementation for the Prototype design pattern for 'Dive into design patterns' ebook",
        screenshots: [
          {
            path: "/static/projects/rg1.png",
            caption: "Refactoring Guru",
          },
        ],
      },
    ],
  },
  {
    logo: "./bklyn-logo.png",
    link: "https://bklyn.co/",
    name: "Bklyn",
    projects: [],
  },
  {
    logo: "./lambda-collective-logo.png",
    link: "https://lambdacollective.com/",
    name: "Lambda Collective",
    projects: [],
  },
  {
    logo: "./fpc-logo.png",
    link: "https://www.fusionpointcapital.com/",
    name: "Fusion Point Capital",
    projects: [],
  },
  {
    logo: "./indianrails-logo.png",
    link: "https://www.indianrails.in/",
    name: "Indian Rails",
    projects: [],
  },
  {
    logo: "./grammarbot-logo.png",
    link: "https://www.grammarbot.io/",
    name: "Grammar Bot",
    projects: [],
  },
  {
    logo: "./danky-logo.png",
    link: "https://www.danky.co.uk/",
    name: "Danky",
    projects: [],
  },
  {
    logo: "./hypo-advisors-logo.png",
    link: "https://www.hypo-advisors.ch/",
    needBg: true,
    name: "Hypo Advisors",
    projects: [],
  },
  {
    logo: "./digitika-logo.png",
    link: "https://www.digitika.co.ke",
    needBg: true,
    name: "Digitika",
    projects: [],
  },
  {
    logo: "./hublemania-logo.png",
    link: "https://www.hublemania.ch/",
    needBg: true,
    name: "Huble Mania",
    projects: [],
  },
];

export default data;
