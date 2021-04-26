var Generator = require('yeoman-generator')

module.exports = class extends Generator {

  async initPackage() {
    const answer = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name?',
        default: this.appname
      }
    ])

    const pkgJson = {
      "name": answer.name,
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        
      },
      "devDependencies": {

      }
    }

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson)
    // 只要package.json发生变化，在yo vue的时候，就会自动执行 npm install
    await this.addDependencies(['vue'])
    await this.addDevDependencies(['webpack', 'vue-loader'])
    // this.npmInstall(['vue'], {'save-dev': false})  // v5.2.0 已经废弃
    // this.npmInstall(['webpack', 'vue-loader'], {'save-dev': true}) // v5.2.0已经废弃
  }
}