import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

export let push = (dirPathArg:string, remoteNameArg:string = "", remoteBranchArg:string = "") => {
    let done = plugins.Q.defer();
    if(!helpers.isGitDirectory(dirPathArg)){
        plugins.beautylog.error("smartgit.push expects a valid git directory");
        done.reject();
        return done.promise;
    }
    // if everything seems allright proceed
    plugins.shelljs.exec(`(cd ${dirPathArg} && git push ${remoteNameArg} ${remoteBranchArg})`);
    done.resolve();
    return done.promise;
};