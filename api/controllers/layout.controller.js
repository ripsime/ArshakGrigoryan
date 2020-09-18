const DataStore = require('nedb');

const db = {}
db.layout = new DataStore({
    filename: './local_storage/layout.db',
    autoload: true,
});

// Get Layout
exports.get = (req, res) => {
	console.log("Get layout");

	try {
		db.layout.find({}, (err, docs) => {
			console.log(docs);
			if (err) {
				/*Ignore*/
			} else {
				return res.send(docs);
			}
		});
	} catch (e) {
		/*Ignore*/
	}
};

// Set Layout
exports.set = (req, res) => {
	console.log("Set layout");

    const { layout } = req.body

    db.layout.update({}, {multi: true}, layout, () => {
        console.log('updated')
    })
};
