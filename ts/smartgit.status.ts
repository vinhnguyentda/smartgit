import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

export let status = (dirPathArg:string) => {
    let done = plugins.Q.defer();
    if(!helpers.isGitDirectory(dirPathArg)){
        plugins.beautylog.error("smartgit.status expects a valid git directory");
        done.reject();
        return done.promise;
    }
    // if everything seems allright proceed
    plugins.shelljs.exec(`(cd ${dirPathArg} && git status)`);
    done.resolve();
    return done.promise;
};