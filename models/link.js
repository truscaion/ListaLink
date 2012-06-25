var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var LinkSchema = new Schema({
    itemTitlu     : String
    itemLink      : String
});

module.exports = mongoose.model('LinkModel', LInkSchema)
