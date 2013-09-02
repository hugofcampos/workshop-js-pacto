require.config({
});

require(['module1', 'module2'],
function   (module1,   module2) {
    //foo and bar are loaded according to requirejs
    //config, but if not found, then node's require
    //is used to load the module.
    console.log('loaded');
});