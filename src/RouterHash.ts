import { RouterParent } from "./RouterParent";

export class RouterHash extends RouterParent {
  constructor() {
    super();
    window.addEventListener("hashchange", this.handleAllListeners.bind(this));
    this.handleAllListeners();
  }

  go(url, state): void {
    this.previous.path = this.currentPath;
    this.previous.state = this.state;
    location.hash = url;
    this.currentPath = location.hash;
    this.state = state;
    this.handleAllListeners();
  }
}
