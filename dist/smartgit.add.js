"use strict";
require("typings-global");
var plugins = require("./smartgit.plugins");
exports.pull = function (optionsArg) {
    if (!optionsArg.ref)
        optionsArg.ref = "master";
    plugins.nodegit.Repository.open(optionsArg.path);
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Z2l0LmFkZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3hCLElBQVksT0FBTyxXQUFNLG9CQUFvQixDQUFDLENBQUE7QUFFbkMsWUFBSSxHQUFHLFVBQUMsVUFBb0M7SUFDbkQsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7SUFDOUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUEiLCJmaWxlIjoic21hcnRnaXQuYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIjtcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vc21hcnRnaXQucGx1Z2luc1wiO1xuXG5leHBvcnQgbGV0IHB1bGwgPSAob3B0aW9uc0FyZzp7cGF0aDpzdHJpbmcscmVmPzpzdHJpbmd9KSA9PiB7XG4gICAgaWYoIW9wdGlvbnNBcmcucmVmKSBvcHRpb25zQXJnLnJlZiA9IFwibWFzdGVyXCI7XG4gICAgcGx1Z2lucy5ub2RlZ2l0LlJlcG9zaXRvcnkub3BlbihvcHRpb25zQXJnLnBhdGgpO1xufVxuIl19
