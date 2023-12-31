import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { HOME_GREETING, MISC } from "../../strings";

import classes from "./dashboardGreeting.module.css";
import DownloadButton from "../download-button/downloadButton";

const PARTICLE_OPTIONS = {
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

function DashboardGreeting() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Particles
        init={particlesInit}
        options={PARTICLE_OPTIONS}
        className={classes.particlesBackground}
      />
      <div className={classes.overlayContent}>
        <div className={classes.greeting}>
          <h1>{HOME_GREETING.GREETING}</h1>
          <h3>{HOME_GREETING.HEADLINE}</h3>
          <h3>{HOME_GREETING.WELCOME}</h3>
        </div>
        <DownloadButton buttonText={MISC.DOWNLOAD_RESUME} fileToDownload={MISC.RESUME_NAME} newFileName={MISC.NEW_RESUME_NAME} />
      </div>
    </div>
  );
}

export default DashboardGreeting;
