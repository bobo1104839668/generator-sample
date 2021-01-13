// 此文件作为Generator的核心入口
//需要导出一个yeoman-generator的类型
//yeoman-generator在工作时会自动调用在此类型上定义的一些生命周期方法
//我们在这些方法中可以调用父类提供的工具实现一些功能
const Generator = require("yeoman-generator");
module.exports = class extends Generator{
    prompting () {
        return this.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'name',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers;
        })
    }
    writing () {
        //yeoman 自动在生成文件阶段调用此方法
        //我们这里尝试往项目目录中写入文件
        // this.fs.write(
        //     this.destinationPath('text.txt'),
        //     Math.random().toString()
        // )
        const teml = this.templatePath('bar.html');

        const out = this.destinationPath('bar.html');

        const content = this.answers;
        this.fs.copyTpl(teml, out, content);
    }
}