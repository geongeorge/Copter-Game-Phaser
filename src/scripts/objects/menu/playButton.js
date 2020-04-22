const fontSize = 50
export default class PlayButton extends Phaser.GameObjects.Text {
  constructor(scene) {
    console.log(scene.game)
    super(scene, 200, 300, 'Play', { color: 'white', fontSize: fontSize })
    scene.add.existing(this)
    this.setOrigin(0.5)
    this.setInteractive()

    this.on('pointerover', () => {
      //   this.setFontSize(fontSize + 20)
      this.scene.tweens.add({
        targets: [this],
        scale: 1.3,
        ease: 'Linear',
        duration: 200,
        yoyo: false,
        repeat: 0,
        callbackScope: this,
      })
      console.log('pointerover')
    })
    this.on('pointerout', () => {
      //   this.setFontSize(fontSize)
      this.scene.tweens.add({
        targets: [this],
        scale: 1,
        ease: 'Linear',
        duration: 200,
        yoyo: false,
        repeat: 0,
        callbackScope: this,
      })
      console.log('pointerover')
    })

    this.on('pointerup', () => {
      console.log('pointerup')
      this.scene.scene.start('MainScene')
    })
  }

  preUpdate() {}
}
