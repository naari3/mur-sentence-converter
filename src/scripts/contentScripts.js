import domready from "domready";
import Murlifier from "murlifier";
import path from "path";

import Murlizer from "./models/murlizer";

const dictUrl = chrome.extension.getURL("dict/");
const murlifier = new Murlifier(dictUrl);

domready(async () => {
  new Murlizer(murlifier, document.querySelectorAll("p")).apply();
});
