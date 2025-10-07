// Implement the launch sequence function here and export it as the default export.
import { fuel } from "./core/fuel.js";
import { getNewRocket } from "./core/rocket.js";
import { FISHSAT, NFSAT } from "./payload/satellites.js";
import {countdown} from "./core/countdown.js"
import {liftoff} from "./core/liftoff.js"
import {deployPayload} from "./core/deploy.js"
import {loadPayload} from "./core/load.js"


export default function launch() {
  getNewRocket();
  loadPayload(FISHSAT);
  loadPayload(NFSAT);
  fuel();
  for (let i = 0; i < 5; i++){
countdown();
  }
  liftoff();
  deployPayload();

}
