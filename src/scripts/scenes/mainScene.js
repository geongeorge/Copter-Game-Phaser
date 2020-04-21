import PhaserLogo from '../objects/phaserLogo'
import Chopper from '../objects/chopper'
import FpsText from '../objects/fpsText'
import Backgrounds from '../objects/background'

export default class MainScene extends Phaser.Scene {
  fpsText
  chopper
  pointer

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    /**
     * Delete all the code below to start a fresh scene
     */
    new Backgrounds(this)

    // new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.chopper = new Chopper(this, this.cameras.main.width / 4, 0)
    this.fpsText = new FpsText(this)

    this.chopper.play('chopper_anim')
    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: 24,
      })
      .setOrigin(1, 0)

    //reset velocity if pointer up
    this.input.on('pointerup', () => {
      this.chopper.unThrust()
    })

    //set pointer
    this.pointer = this.input.activePointer

    console.log(this.input)
  }

  update(time, delta) {
    this.fpsText.update()

    // Thrust up if pressing
    if (this.pointer.isDown || this.pointer.onTap) {
      this.chopper.thrustUp(delta)
    }
  }
}
