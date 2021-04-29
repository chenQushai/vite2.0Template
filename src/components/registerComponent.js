const modulesFiles = import.meta.glob('./*.vue');

export const  mapComponent = (app) => {
    for (const modulePath in modulesFiles) {
        modulesFiles[modulePath]().then((mod) => {
            let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
            moduleName = moduleName.substring(moduleName.lastIndexOf('/') + 1, moduleName.length);
            const value = mod.default;
            app.component(moduleName, value);
        })
    }
};





