import domready from "domready";
import Murlifier from "murlifier";
import path from "path";

const dictUrl = chrome.extension.getURL("dict/");
const murlifier = new Murlifier(dictUrl);

domready(async () => {
  new Murlizer(murlifier, document.querySelectorAll("p")).apply();
});

class Murlizer {
  constructor(murlifier, doms) {
    this.murlifier = murlifier;
    this.doms = Array.from(doms);
  }

  apply() {
    for (let dom of this.doms) {
      this.murlize(dom);
    }
  }

  async murlize(dom) {
    dom.innerHTML = await this.murlifier.murlify(dom.innerHTML);
  }
}
