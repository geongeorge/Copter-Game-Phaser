export default class BgClass extends Phaser.GameObjects.TileSprite {
  bgName
  speed
  constructor(scene, bgName, speed) {
    let img = scene.game.textures.get(bgName).getSourceImage()

    super(scene, 0, scene.game.scale.height - img.height, scene.game.scale.width, img.height, bgName)
    this.bgName = bgName
    this.speed = speed
    scene.add.existing(this)

    this.scale = 2
  }
  preUpdate() {
    this.tilePositionX += this.speed
  }
}
