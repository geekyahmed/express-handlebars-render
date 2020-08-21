const fs = require('fs')
const autoRender = {}

function renderHbs() {
    return function (next) {
        var path = req.path.toLowerCase();
        // check cache; if it's there, render the view
        if (autoRender[path]) return res.render(autoRender[path]);
        // if it's not in the cache, see if there's
        // a .handlebars file that matches
        if (fs.existsSync(__dirname + '/views/' + path + '.handlebars')) {
            atutoRender[path] = path.replace(/^\//, '');
            return res.render(autoRender[path]);
        }
        next();
    }
}

module.exports = renderHbs