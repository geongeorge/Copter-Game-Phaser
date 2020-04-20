import BgClass from './bgs/bgs'
import sprites from '../global/sprites'

export default class Backgrounds extends Phaser.GameObjects.Group {
  constructor(scene) {
    let bgs = []

    sprites.bgs.forEach((el) => {
      bgs.push(new BgClass(scene, el.name, el.speed))
    })
    super(scene, bgs)
    scene.add.existing(this)
  }
}
