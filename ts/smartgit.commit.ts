import "typings-global"
import plugins = require("./smartgit.plugins");

export = function(pathArg:string,commitMessage:string) {
    var result = plugins.nodegit.index.addByPath(pathArg);
    if (result == 0) {
        
    }
};