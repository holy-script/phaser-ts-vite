import Phaser from "phaser";

export default class Play extends Phaser.Scene {
  constructor() {
    super({
      key: "Play",
    });
  }

  create() {
    this.add.text(100, 100, "Hello World");
  }
}
