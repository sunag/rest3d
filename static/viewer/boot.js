
require.config({
    paths: {
        jquerymin: "../deps/jquery-2.0.3.min",
        jqueryui: '../deps/jquery-ui-1.9.2.min',
        codemirror: "../deps/codemirror/codemirror.min",
        javascript: "../deps/codemirror/javascript",
        showHint: "../deps/codemirror/show-hint",
        javacriptHint: "../deps/codemirror/javascript-hint",
        dialog:"../deps/codemirror/dialog",
        search:"../deps/codemirror/search",
        searchCursor:"../deps/codemirror/search-cursor",
        jquerylayout: "../deps/jquery.layout-1.3.0.min",
        upload: '../deps/upload/jquery.fileupload',
        uploadProcess: '../deps/upload/jquery.fileupload-process',
        uploadValidate: '../deps/upload/jquery.fileupload-validate',
        uploadTransport: '../deps/upload/jquery.iframe-transport',
        skinner: '../deps/jquery-skinner',
        jstree: '../deps/jstree/jquery.jstree',
        glmatrix: '../deps/gl-matrix',
        glmatrixExt: '../loaders/gl-matrix-ext',
        toolbar: "../deps/jquery.toolbar",
        terminal: "../deps/jquery.terminal-0.7.10.min",
        pnotify: "../deps/jquery.pnotify.min",
        colorpicker: "../deps/colorpicker/colorpicker",
        eye: "../deps/colorpicker/eye",
        utils: "../deps/colorpicker/utils",
        webglUtils: "../deps/webgl-utils",
        WebGLDebugUtils:"../deps/webgl-debug",
        collada:"../loaders/collada",
        gltf:"../loaders/gltf",
        console:"../deps/console",
        screenfull:"../deps/screenfull",
        gui:"../gui/gui6",
    },
    shim: {
        'codemirror':{
            exports: 'CodeMirror'
        },
        'jqueryui':{
            deps: ['jquerymin'],
            exports: '$.ui'
        },
        'jquerylayout':{
            deps: ['jquerymin'],
            exports: '$.fn.layout;'
        },
        'skinner':{
            deps: ['jquerymin'],
            exports: '$.fn.skinner'
        },
        'uploadProcess':{
             deps: ['upload'],
             exports: 'originalAdd',
        },
        'uploadValidate':{
            deps: ['uploadProcess'],
            exports: '$.blueimp.fileupload',
        },
        'uploadTransport':{
             deps: ['jquerymin'],
             exports: '$',
        },
        'upload':{
            deps: ['jquerymin','jqueryui'],
            exports: "$.fn.fileupload",
        },
        'toolbar':{
            deps: ['jquerymin'],
            exports: "$.fn.toolbar",
        },
        'terminal':{
            deps: ['jquerymin'],
            exports: '$.fn.terminal',
        },
        'pnotify':{
            deps: ['jquerymin'],
            exports: '$.pnotify',
        },
        'jstree':{
           deps: ['jquerymin'],
           exports: '$.fn.jstree' 
        },
        'colorpicker':{
            deps: ['jquerymin'],
            exports: '$.fn.ColorPicker',
        },
        'eye':{
            deps: ['jquerymin'],
            exports: 'window.EYE',
        },
        'utils':{
            deps: ['eye'],
            exports: 'window.EYE',
        },
        'glmatrixExt':{
            deps: ['glmatrix'],
            exports: 'vec3',
        },
        'webglUtils':{
            deps: ['glmatrixExt'],
            exports: 'WebGLUtils',
        },
        'WebGLDebugUtils':{
            exports: 'WebGLDebugUtils',
        },
        'collada':{
            exports: 'COLLADA',
        },
        'gltf':{
            deps:['glmatrixExt'],
            exports: 'glTF',
        },
        'console':{
            deps: ['jquerymin'],
            exports: 'CONSOLE',
        },
        'renderer':{
            deps: ['jquerymin'],
            exports: 'RENDERER',
        },
        'rest3d':{
            deps: ['jquerymin'],
            exports: 'rest3d',
        },
        'state':{
            deps: ['jquerymin'],
            exports: 'State',
        },
        'viewer':{
             deps: ['glmatrixExt'],
             exports: 'viewer',
        },
        'camera':{
            exports: 'Camera',
        },
        'channel':{
            deps: ['State'],
            exports: 'Channel',
        },
        'screenfull':{
            exports: 'screenfull',
        },
        'javascript':{
            deps: ['codemirror']
        },
        'showHint':{
            deps: ['codemirror']
        },
        'javacriptHint':{
            deps: ['codemirror']
        },
        "dialog":{
            deps: ['codemirror']
        },
        "search":{
            deps: ['codemirror']
        },
        "searchCursor":{
            deps: ['codemirror']
        },
        "gui":{
            exports: ['GUI']
        },
    },
})
// var dep = [{
// }, {
// }, {
// }, {
// }, {
// }, {
// }, {
// },
//     {
// },
//     {
// }, {
//     link: "../deps/jquery-2.0.3.min.js",
//     obj: "$('')"
// }, {
//     link: "../deps/jquery-ui-1.9.2.min.js",
//     obj: "$.ui"
// }, {
//     link: "../deps/codemirror/codemirror.min.js",
//     obj: "window.CodeMirror"
// }, {
//     link: "../deps/jquery.layout-1.3.0.min.js",
//     obj: "$.layout"
// },{
//     link: "../deps/jquery.toolbar.js",
//     obj: "$.toolbar"
// }, {
//     link: "../deps/jquery.terminal-0.7.10.min.js",
//     obj: "$.omap "
// }, {
//     link: "../deps/jquery.pnotify.min.js",
//     obj: "$.pnotify"
// }, {
//     link: "../deps/codemirror/javascript.js",
//     obj: "indentUnit"
// }, {
//     link: "../deps/codemirror/show-hint.js",
//     obj: "CodeMirror.showHint"
// }, {
//     link: "../deps/codemirror/javascript-hint.js"
// }, {
//     link: "../deps/codemirror/dialog.js"
// }, 
//  {
//     link: "../deps/codemirror/search.js"
// }, {link: "../deps/codemirror/search-cursor.js"}, 
// {link: "../deps/jquery-skinner.js",
//     obj: "$.skinner"
// },
// {link:"/deps/jstree/jquery.jstree.js"},
// {link:"/deps/upload/jquery.iframe-transport.js"},
// {link:"/deps/upload/jquery.fileupload.js"},
// {link:"/deps/upload/jquery.fileupload-process.js"},
// {link:"/deps/upload/jquery.fileupload-validate.js"},
// {link:"/deps/colorpicker/colorpicker.js"},
// {link:"/deps/colorpicker/eye.js"},
// {link:"/deps/colorpicker/utils.js"},
// {link:"/deps/colorpicker/css/colorpicker.css"},
// {link:"/deps/colorpicker/css/layout.css"},
// ];
//     dep.push({link:"/loaders/collada.js"});
//     dep.push({link:"/loaders/gltf.js"});
//     dep.push({link:"../deps/console.js"});
//     dep.push({link:"/deps/webgl-utils.js"});
//     dep.push({link:"/deps/webgl-debug.js"});
//     dep.push({link:"/deps/gl-matrix.js"});
//     dep.push({link:"/loaders/gl-matrix-ext.js"});
//     dep.push({link:"renderer.js"});
//     dep.push({link:"rest3d.js"});
//     dep.push({link:"viewer.js"});
//     dep.push({link:"state.js"});
//     dep.push({link:"camera.js"});
//     dep.push({link:"channel.js"});
//     dep.push({link:"/deps/screenfull.js"});

var css = [
"../deps/codemirror/css/eclipse.css",
"../deps/css/jquery-skinner.css",
"../deps/codemirror/css/codemirror.css",
"../deps/codemirror/css/show-hint.css",
"../deps/codemirror/css/dialog.css",
"../deps/css/bootstrap.icons.css",
"../deps/css/jquery.toolbars.css",
"../deps/css/jquery.terminal.css",
"../gui/gui6.css",
"../deps/css/jquery.pnotify.default.css",
"../deps/colorpicker/css/colorpicker.css",
"../deps/colorpicker/css/layout.css",
]


function loadStyle(){
    for(var i=0;i<css.length;i++){
        var s = document.createElement('link');
        s.rel = 'stylesheet';
        s.href = css[i];
        document.getElementsByTagName('head').item(0).appendChild(s);
    }
};

require(['jquerymin','jqueryui','codemirror','javascript','showHint','javacriptHint','dialog','search','searchCursor','jquerylayout','upload','uploadProcess','uploadValidate','uploadTransport',
    'skinner','jstree','glmatrixExt','toolbar','terminal','pnotify','colorpicker','eye','utils','webglUtils','WebGLDebugUtils','collada','gltf','console','screenfull','gui',
    'camera','channel','renderer','rest3d','state','viewer'],function(e){
    loadStyle();
    INIT();
})


