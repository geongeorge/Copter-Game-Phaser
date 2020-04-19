export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    this.load.spritesheet('chopper', 'assets/img/chopper.png', {
      frameWidth: 278,
      frameHeight: 110,
    })

    //bg layers
    this.load.image('bg-1', 'assets/img/bg/Layer_0010_1.png')
    this.load.image('bg-2', 'assets/img/bg/Layer_0009_2.png')
    this.load.image('bg-3', 'assets/img/bg/Layer_0008_3.png')
    this.load.image('bg-4', 'assets/img/bg/Layer_0007_Lights.png')
    this.load.image('bg-5', 'assets/img/bg/Layer_0006_4.png')
    this.load.image('bg-6', 'assets/img/bg/Layer_0005_5.png')
    this.load.image('bg-7', 'assets/img/bg/Layer_0004_Lights.png')
    this.load.image('bg-8', 'assets/img/bg/Layer_0003_6.png')
    this.load.image('bg-9', 'assets/img/bg/Layer_0002_7.png')
    this.load.image('bg-10', 'assets/img/bg/Layer_0001_8.png')
    this.load.image('bg-11', 'assets/img/bg/Layer_0000_9.png')
  }

  create() {
    this.scene.start('MainScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
