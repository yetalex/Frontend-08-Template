var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }

  initPackage() {
    const pkgJson = {
      devDependencies: {
        eslint: '^3.15.0'
      },
      dependencies: {
        react: '^16.2.0'
      }
    }

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson)
  }

  installingLodash() {
    this.npmInstall(['lodash'], { 'save-dev': true })

    // this.npmInstall() is not a function错误
  }

  prompting() {
    this.fs.copyTpl(
      this.templatePath('t.html'),
      this.destinationPath('public/index.html'),
      { title: 'Templating with Yeoman' }
    )
  }
}