import classes from "./dashboard.module.css";
import Introduction from "../../components/introduction/introduction";
import Education from "../../components/education/education";
import Interests from "../../components/interests/interests";
import { INTRO } from '../../strings';

import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

function DashboardPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 8 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    background: {
      color: {
        value: "#000000",
      },
    },
    fullScreen: false,
  };

  return (
    <div className={classes.dashboard}>
      <div className={classes.wrapper}>
        <Particles init={particlesInit} options={options} className={classes.particlesBackground} />
        <div className={classes.greeting}>
          <h1>{INTRO.GREETING}</h1>
          <h3>{INTRO.HEADLINE}</h3>
          <h3>{INTRO.WELCOME}</h3>
        </div>
      </div>
      <Introduction />
      <Education />
      <Interests />
    </div>
  );
}

export default DashboardPage;
