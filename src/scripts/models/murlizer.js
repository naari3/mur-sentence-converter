export default class Murlizer {
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
