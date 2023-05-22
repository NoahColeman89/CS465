var fs = require('fs');

var accoms = JSON.parse(fs.readFileSync('./data/accoms.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', accoms });
};

module.exports = {
    rooms
};
   