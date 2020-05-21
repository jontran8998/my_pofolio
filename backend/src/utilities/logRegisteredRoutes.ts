var routes = {}
var buffer = ""

const addToBuffer = (text: string) => {
    buffer += text + "\n"
}

function print(path, layer) {
    if (layer.route) {
        layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
    } else if (layer.name === 'router' && layer.handle.stack) {
        layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
    } else if (layer.method) {
        let method = layer.method.toUpperCase()
        let space = getSpace(8 - layer.method.length)
        let route = path.concat(split(layer.regexp)).filter(Boolean).join('/')
        let key = `[${method}]${space}${route}`

        if (!routes[key]){
            routes[key] = true    
            addToBuffer(key)
        }
    }
}

function getSpace(x) {
    var res = '';
    while(x--) res += ' ';
    return res;
}

function split(thing) {
    if (typeof thing === 'string') {
        return thing.split('/')
    } else if (thing.fast_slash) {
        return ''
    } else {
        var match = thing.toString()
            .replace('\\/?', '')
            .replace('(?=\\/|$)', '$')
            .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
        return match
            ? match[1].replace(/\\(.)/g, '$1').split('/')
            : '<complex:' + thing.toString() + '>'
    }
}

function getRoutesList(app){
    buffer = ""
    addToBuffer("Registered routes:------------------")
    app._router.stack.forEach(print.bind(null, []))
    addToBuffer("------------------------------------")
    return buffer
}


export default getRoutesList