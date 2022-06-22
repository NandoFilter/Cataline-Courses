// Decorators

function logger(text: string) {
    return (target: any) => {
        console.log(target, text);
    }
}

function setApiVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

// @logger('Fernando')
@setApiVersion('1.0.0') // set Property
class API { }

console.log(new API());
