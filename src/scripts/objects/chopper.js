import sprites from '../global/sprites'

export default class Chopper extends Phaser.Physics.Arcade.Sprite {
  yVelocity = 1
  yVelocityInc = 25

  constructor(scene, x, y) {
    super(scene, x, y, 'chopper')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    const randomChopper = sprites.choppers[Math.floor(Math.random() * sprites.choppers.length)]
    scene.anims.create({
      key: 'chopper_anim',
      frames: scene.anims.generateFrameNumbers(randomChopper.name),
      frameRate: 20,
      repeat: -1,
    })

    // scene.anims.create({
    //   key: 'chopper_smoke_anim',
    //   frames: scene.anims.generateFrameNumbers('smoke'),
    //   frameRate: 20,
    //   repeat: -1,
    // })

    this.setCollideWorldBounds(true).setBounce(0).setGravityY(500)

    // flip to right
    this.flipX = true

    this.scale = 0.8

    //   .on('pointerdown', () => {
    //     this.setVelocityY(-400)
    //   })

    console.log('chpp ceeated')
    this.play('chopper_smoke_anim')
  }

  thrustUp(delta) {
    this.yVelocity += 0.01
    let vel = -this.yVelocityInc * this.yVelocity * delta
    console.log(this.yVelocity)
    this.setVelocityY(vel)
  }

  unThrust() {
    this.yVelocity = 1
    // if (this.body.velocity.y <= 0) {
    //   //   let vel = this.body.velocity.y + this.yVelocityInc
    //   //   this.setVelocityY(vel)
    // }
  }
}
