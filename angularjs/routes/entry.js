var _ = require('lodash');

var entries = [
    {id: 1, title: 'hoge', body: 'Yeah!!!' }
];
var entryMaxId = 1;

exports.get = function (req, res) {
  var id = req.params.id;
  for (var i=0,l=entries.length; i<l; i++) {
    if (entries[i].id == id) {
      res.send(entries[i]);
    }
  }
  console.log("Not found");
  res.send({});
};

exports.list = function (req, res) {
  var page = req.query.page ||  1;
  var rows = req.query.rows || 10;
  var offset = (page - 1) * rows;
  res.send(entries.slice(offset, page*rows));
};

exports.remove = function (req, res) {
  entries = entries.filter(
    function (e) {
      return e.id != req.params.id;
    }
  );
  res.send({});
};

exports.update = function (req, res) {
  var id = req.params[0];
  for (var i=0,l=entries.length; i<l; i++) {
    if (entries[i].id == id) {
      entries[i] = _.merge(req.query, entries[i]);
      res.send(entries[i]);
    }
  }
  res.send({});
};

exports.create = function (req, res) {
  entryMaxId++;
  var entry = req.body;
  entry.id = entryMaxId;
  entries.unshift(entry);
  res.send(entry);
};

