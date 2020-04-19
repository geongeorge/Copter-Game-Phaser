import BgClass from './bgs/bgs'

export default class Backgrounds extends Phaser.GameObjects.Group {
  constructor(scene) {
    let allImages = [
      {
        name: 'bg-0',
        speed: 0,
      },
      {
        name: 'bg-1',
        speed: 0.6,
      },
      {
        name: 'bg-2',
        speed: 0.9,
      },
      {
        name: 'bg-3',
        speed: 1,
      },
      {
        name: 'bg-4',
        speed: 1.3,
      },
      {
        name: 'bg-5',
        speed: 1.7,
      },
      {
        name: 'bg-6',
        speed: 2,
      },
      {
        name: 'bg-7',
        speed: 2.3,
      },
      {
        name: 'bg-8',
        speed: 2.7,
      },
      {
        name: 'bg-9',
        speed: 3,
      },
      {
        name: 'bg-10',
        speed: 3.5,
      },
      {
        name: 'bg-11',
        speed: 4,
      },
    ]
    let bgs = []

    allImages.forEach((el) => {
      bgs.push(new BgClass(scene, el.name, el.speed))
    })
    super(scene, bgs)
    scene.add.existing(this)
  }
}
