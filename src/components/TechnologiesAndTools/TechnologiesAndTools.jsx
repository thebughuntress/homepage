import { Box, Typography } from "@mui/material";
import React from "react";
import TechnologyBox from "../TechnologyBox/TechnologyBox";

const technologies = [
  {
    label: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    label: "Django",
    img: "https://hiit.ng/wp-content/uploads/2024/02/django-logo-big.jpg",
  },
  {
    label: "NodeJS",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    label: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  },
  {
    label: "Vue",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
  },
  {
    label: "Angular",
    img: "https://platri.de/wp-content/uploads/2024/01/Angular-Framework-e1649312852136.png",
  },
  {
    label: "TypeScript",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    label: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    label: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    label: "Redux",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    label: "Bootstrap",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    label: "Material UI",
    img: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
  },
  {
    label: "Styled Components",
    img: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
  },
  {
    label: "Sass",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  },
  {
    label: "Cypress",
    img: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_10f53e90961b98df0191922f13efd135/cypress.png",
  },
  {
    label: "Selenium",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
  },
  {
    label: "Postman",
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    label: "MATLAB",
    img: "data:image/jpeg;base64,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",
  },
  {
    label: "Raspberry Pi",
    img: "https://upload.wikimedia.org/wikipedia/de/thumb/c/cb/Raspberry_Pi_Logo.svg/570px-Raspberry_Pi_Logo.svg.png",
  },
  {
    label: "Excel / VBA",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/240px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png",
  },
  {
    label: "Java",
    img: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.jpg",
  },
  {
    label: "JHipster",
    img: "https://www.jhipster.tech/jhipster-artwork/logos/JHipster%20bowtie%20-%20square.png",
  },
  {
    label: "Google Cloud",
    img: "data:image/png;base64,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",
  },
  {
    label: "Firebase",
    img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    label: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    label: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
];

const TechnologiesAndTools = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "primary.main",
        paddingTop: 5,
        paddingLeft: { xs: 3, md: "20rem" },
        paddingRight: { xs: 0, md: "20rem" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          paddingY: 2,
          fontSize: { xs: "25px", md: "35px" },
          color: "white",
        }}
      >
        Technologies and Tools
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {technologies.map((technology, index) => (
          <TechnologyBox
            key={index}
            label={technology.label}
            img={technology.img}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TechnologiesAndTools;
