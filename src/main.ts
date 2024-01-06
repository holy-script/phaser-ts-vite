import Phaser from "phaser";
import Play from "./scenes/play";

const launch = () => {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent: "app",
    width: window.innerWidth,
    height: window.innerHeight,
    scene: Play,
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 2000 },
      },
    },
  });
};

launch();
