import { useState } from "react";
import { Storage } from "aws-amplify";
import classes from "./downloadButton.module.css";
import { MISC } from "../../strings";

function DownloadButton(props) {
  const [downloading, setIsDownloading] = useState(false);

  function downloadResume() {
    if (downloading) return;
    setIsDownloading(true);

    Storage.get(props.fileToDownload, {
      download: true,
    })
      .then((result) => downloadBlob(result.Body, props.newFileName))
      .catch((error) => {
        alert(MISC.DOWNLOAD_ERROR);
        console.log(error);
      })
      .finally(() => setIsDownloading(false));
  }

  function downloadBlob(blob, filename) {
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
    <button className={classes.downloadButton} onClick={downloadResume}>
      {downloading ? MISC.DOWNLOADING : props.buttonText}
    </button>
  );
}

export default DownloadButton;
