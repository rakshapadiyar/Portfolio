import stServe from "../../assets/static-serve.png";
import slack from "../../assets/slack.png";
import portfolio from "../../assets/portfolio.png"

const projects = [
  {
    name: "Static Serve",
    area: "Google Cloud - Cloud Storage",
    repo: "https://github.com/rakshapadiyar/Static-Serve",
    demo: "https://www.youtube.com/shorts/uY2q-SvgM8E",
    img: stServe,
  },
  {
    name: "GitHub-Slack Integration",
    area: "Google Cloud - Cloud Functions",
    repo: "https://github.com/rakshapadiyar/GitHub-Slack-Integration",
    demo: "https://www.youtube.com/watch?v=8BDUfGBvma8",
    img: slack,
  },
  {
    area: "FrontEnd-React.js",
    name: "Portfolio Project",
    repo: "https://github.com/rakshapadiyar/Portfolio",
    demo: "rakshapadiyar.github.io/Portfolio/",
    img: portfolio,
  },
];

export default projects;
