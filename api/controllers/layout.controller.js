const Datastore = require("nedb");

const db = {};
db.layout = new Datastore({
	filename: "./local_storage/layout.db",
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

// Add Layout
exports.add = (req, res) => {
	console.log("Add layout");

	const { layout } = req.body;

	db.layout.insert(layout, () => {
		console.log("Added");
	});
};
