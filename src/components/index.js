/*
 **全局注册组件
 ** 放在components/global文件夹下
 */
const modulesFiles = import.meta.globEager('/src/components/*.vue');
const globalResult = Object.keys(modulesFiles).filter(item => true);
export default app => {
    globalResult.forEach(item => {
        const component = modulesFiles[item]?.default;
        const componentFile = item.substring(item.lastIndexOf('/') + 1, item.length);
        const componentName = componentFile.replace('.vue','');
        app.component(componentName, component)
    })
}