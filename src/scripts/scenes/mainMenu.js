import PlayButton from '../objects/menu/playButton'
import Backgrounds from '../objects/background'

export default class MainScene extends Phaser.Scene {
  playButton

  constructor() {
    super({ key: 'MainMenu' })
  }

  create() {
    /**
     * Delete all the code below to start a fresh scene
     */
    new Backgrounds(this)

    // new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.playButton = new PlayButton(this)
  }

  update(time, delta) {}
}
