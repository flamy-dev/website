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
    logo: "/static/logos/travelbank.png",
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
    logo: "/static/logos/TechChange.png",
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
    logo: "/static/logos/byte.png",
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
    logo: "/static/logos/refactoring-guru.png",
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
    logo: "/static/logos/bklyn.png",
    link: "https://bklyn.co/",
    name: "Bklyn",
    projects: [
      {
        link: "https://bklyn.co",
        name: "On-demand designer slack app",
        tags: ["slack", "app", "javascript", "mongodb", "heroku"],
        description: `Slack app that any company can add to their workspace 
needing a designer. The desinger is just one command away \`/new designer\`. On
receiving this command the slack app creates a channel for that particular customer
on the company(bklyn)'s slack and from there on all the conversation is bridged 
between bklyn designer and the slack of client requiring designer.

This way companies can find on-demand designers without ever leaving their slack
workspace.

The app was created using node, mongodb, and deployed on heroku.`,
        screenshots: [],
      },
    ],
  },
  {
    logo: "/static/logos/lambda-collective.png",
    link: "https://lambdacollective.com/",
    name: "Lambda Collective",
    projects: [],
  },
  {
    logo: "/static/logos/fpc.png",
    link: "https://www.fusionpointcapital.com/",
    name: "Fusion Point Capital",
    projects: [
      {
        link: "https://www.fusionpointcapital.com",
        name: "Stock screener, fundamentals, charts app",
        tags: [
          "react",
          "material-ui",
          "redux",
          "python",
          "asyncio",
          "aiohttp",
          "influxdb",
          "finance",
        ],
        description: `Fusion point capial has its own set of filters / screeners 
that are derived using propreitary and special technicals of [Arun Chopra](https://twitter.com/FusionptCapital).

Stock historical data gathering and storing is done on influxdb for faster
time series queries. The frontend uses react and redux for rendering and
visualising all the data using charting library from [tradingview](https://github.com/tradingview/lightweight-charts).`,
        screenshots: [
          {
            path: "/static/projects/fpc1.png",
            caption: "Various different screeners",
          },
          {
            path: "/static/projects/fpc2.png",
            caption: "Screener with various sorting and filtering features",
          },
          {
            path: "/static/projects/fpc3.png",
            caption: "Detailed stock view with fundamentals and charts",
          },
        ],
      },
    ],
  },
  {
    logo: "/static/logos/indianrails.png",
    link: "https://www.indianrails.in/",
    name: "Indian Rails",
    projects: [
      {
        link: "https://www.indianrails.in/",
        name: "Backend feature for PNR status",
        tags: [
          "node",
          "puppeteer",
          "recaptcha",
          "reverse-engineering",
          "api",
          "backend",
        ],
        description: `
Developed backend api endpoint for checking PNR status of tickets. 

There is no official API to get this data. Hence, it was required
for us to reverse engineer the private API or scrape directly from
the website. Also, this required for us to bypass recaptcha since
the PNR webpage is behind recaptcha.

We accomplished the same by browser instrumenation and careful OCR
recognition to solve the captcha.`,
        screenshots: [
          { path: "/static/projects/ir1.png", caption: "IndianRails App" },
        ],
      },
    ],
  },
  {
    logo: "/static/logos/grammarbot.png",
    link: "https://www.grammarbot.io/",
    name: "Grammar Bot",
    projects: [
      {
        link: "https://github.com/GrammarBot-API/grammarbot-py",
        name: "Grammar Bot python client library",
        tags: ["grammarbot", "python", "library", "pypi"],
        description: `
Creating python client library for the grammarbot-api. The same can be found on
[github](https://github.com/GrammarBot-API/grammarbot-py) and is also published
on [PyPI](https://pypi.org/project/grammarbot/)`,
        screenshots: [
          {
            path: "/static/projects/gb1.png",
            caption: "GrammarBot python client library",
          },
        ],
      },
    ],
  },
  {
    logo: "/static/logos/danky.png",
    link: "https://www.danky.co.uk/",
    name: "Danky",
    projects: [
      {
        link: "https://www.danky.co.uk",
        name: "Resume management and automation",
        tags: [
          "resume-management",
          "python",
          "teamtailor",
          "automation",
          "cv-library",
          "resume-library",
        ],
        description: `Danky helps warehouse job-seekers search and get warehouse
jobs. In the process it requires some automation for getting all resumes on
[teamtailor](https://teamtailor.com) and submitting the resumes to 
[cv-library](https://cv-library.co.uk) and [resume-library](https://resume-library.com).

The automation for the same was written using the APIs provided by teamtailor,
cv-library and resume-library in python.`,
        screenshots: [
          {
            caption: "Danky",
            path: "/static/projects/danky1.png",
          },
        ],
      },
    ],
  },
  {
    logo: "/static/logos/hypo-advisors.png",
    link: "https://www.hypo-advisors.ch/",
    needBg: true,
    name: "Hypo Advisors",
    projects: [
      {
        link: "https://www.hypo-advisors.ch/en/simulateur/",
        name: "Borrowing Capacity Calculator",
        tags: ["react", "material-ui", "calculator", "redux"],
        description: `Hypo Advisors helps people get mortgages. The project was to
create an interactive calculator for customers to check how much mortgage they can
get, interest rates, etc. based on the buying price of property, earnings, bonuses,
etc. It outputs a visualization along with information about buying capacity.`,
        screenshots: [
          {
            caption: "Calculator Input",
            path: "/static/projects/ha1.png",
          },
          {
            caption: "Calculator Output",
            path: "/static/projects/ha2.png",
          },
        ],
      },
    ],
  },
  {
    logo: "/static/logos/digitika.png",
    link: "https://www.digitika.co.ke",
    needBg: true,
    name: "Digitika",
    projects: [],
  },
  {
    logo: "/static/logos/hublemania.png",
    link: "https://www.hublemania.ch/",
    needBg: true,
    name: "Huble Mania",
    projects: [
      {
        link: "https://www.hublemania.ch/placements/meteo-fonds-opp2/",
        name: "Risk comparator tool",
        tags: ["react", "material-ui"],
        description: `Data visualization project that needed API development for
wordpress that proxied to other API for getting data and returning the adapted
response. 

The frontend queried the API for getting the data and visualising the same.
Visualization is an imposition of line and scatter chart with points being
different icon depending on the data point. The chart also has interaction
tools like zoom, pan, etc.`,
        screenshots: [
          {
            caption: "Chart Visualization",
            path: "/static/projects/hm1.png",
          },
          {
            caption: "Table Visualization",
            path: "/static/projects/hm2.png",
          },
        ],
      },
    ],
  },
];

export default data;
