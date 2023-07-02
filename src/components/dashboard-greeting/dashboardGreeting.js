import { useCallback, useState } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { INTRO, MISC } from "../../strings";
import { Storage } from "aws-amplify";

import classes from "./dashboardGreeting.module.css";

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

  const [downloading, setIsDownloading] = useState(false);

  function downloadResume() {
    if (downloading) return;
    setIsDownloading(true);

    Storage.get("U - Resume 4.pdf", {
      download: true,
    })
      .then((result) => {
        downloadFile(result.Body, "aditya-resume");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsDownloading(false);
      });
  }

  function downloadFile(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "download";
    const clickHandler = () => {
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.removeEventListener("click", clickHandler);
      }, 150);
    };
    a.addEventListener("click", clickHandler, false);
    a.click();
    return a;
  }

  return (
    <div className={classes.wrapper}>
      <Particles
        init={particlesInit}
        options={PARTICLE_OPTIONS}
        className={classes.particlesBackground}
      />
      <div className={classes.overlayContent}>
        <div className={classes.greeting}>
          <h1>{INTRO.GREETING}</h1>
          <h3>{INTRO.HEADLINE}</h3>
          <h3>{INTRO.WELCOME}</h3>
        </div>
        {/* TODO: Have a spinner instead of this text */}
        <button onClick={downloadResume}>
          {downloading ? "Downloading" : MISC.DOWNLOAD_RESUME}
        </button>
      </div>
    </div>
  );
}

export default DashboardGreeting;
