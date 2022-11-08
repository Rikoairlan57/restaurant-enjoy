/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-console */
import { Workbox } from "workbox-window";

const swRegister = () => {
  if ("serviceWorker" in navigator) {
    const workBox = new Workbox("./sw.js");

    workBox.addEventListener("waiting", () => {
      console.log(
        "A new service worker has installed, but it can't activate until all tabs running the current version have fully unloaded."
      );
    });

    workBox.addEventListener("activated", (event) => {
      if (!event.isUpdate) {
        console.log("Service worker activated for the first time!");
      }
    });

    workBox.register();
  }
};

export default swRegister;
