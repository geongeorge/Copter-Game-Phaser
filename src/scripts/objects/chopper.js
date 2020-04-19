export default class Chopper extends Phaser.Physics.Arcade.Sprite {
  yVelocity = 0
  yVelocityInc = 25
  constructor(scene, x, y) {
    super(scene, x, y, 'chopper')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    scene.anims.create({
      key: 'chopper_anim',
      frames: scene.anims.generateFrameNumbers('chopper'),
      frameRate: 20,
      repeat: -1,
    })

    this.setCollideWorldBounds(true).setBounce(0).setGravityY(500)

    // flip to right
    this.flipX = true

    //   .on('pointerdown', () => {
    //     this.setVelocityY(-400)
    //   })
  }

  thrustUp(delta) {
    this.yVelocity += this.yVelocityInc
    let vel = -this.yVelocityInc * delta
    this.setVelocityY(vel)
  }
  unThrust() {
    this.yVelocity = 0
    // if (this.body.velocity.y <= 0) {
    //   //   let vel = this.body.velocity.y + this.yVelocityInc
    //   //   this.setVelocityY(vel)
    // }
  }
}
