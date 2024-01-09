import Phaser from "phaser";
import Play from "./scenes/play";

let game: Phaser.Game | null = null;

const launch = () => {
  if (game) {
    return game;
  }

  return new Phaser.Game({
    title: `Phaser ${__APP_ENV__}`,
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
    scale: {
      mode: Phaser.Scale.NONE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  });
};

game = launch();

const mode = __APP_ENV__;

window.addEventListener("resize", () => {
  if (game) {
    console.log(mode);
    // game.destroy(true);
    // game = null;
    game.scale.resize(window.innerWidth, window.innerHeight);
  }

  // game = launch();
});
