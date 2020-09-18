module.exports = (app) => {
    const layout = require('../controllers/layout.controller.js')
    // Get Layout
    app.get('/layout', layout.get)

    // Set Layout
    app.post('/layout', layout.set)
}