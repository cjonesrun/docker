var request = require("request");
var express = require('express');
var logging = require( "../logging" );
var path = require('path');
var router = express.Router();

const {WidgetRepo} = require('../repo/widgets.js');
var repo = new WidgetRepo();

module.exports = (router) => {
  logging.getLogger().info("adding", __filename);

  router.get('/', function(req, res) {
    res.render('index', { title: 'page: home', url: 'https://whatsmyip.com/' });
  });

  router.get('/page1', function(req, res) {
    res.render('page1', { title: 'page: page1', url: 'https://whatsmyip.com/' });
  });


  router.post('/page2', function(req, res) {
    var widgetname = req.body.widgetname;
    logging.getLogger().debug('looking up widget by name: ', widgetname);
    console.log('looking up widget by name: ', widgetname);
    //var url = "https://jsonplaceholder.typicode.com/users?username=" + username;
    //console.log('hitting url:', url);

    repo.getByName(widgetname, req.db, (err, result) => {
      res.render('page2', { title: result.name, widget: result });
    });
  });

  router.get('/page2', function(req, res) {
    res.render('page2', { title: 'page2 page2', url: 'http://www.google.com' });
  });

  router.get('/widgets', function(req, res) {
    repo.all(req.db, (err, results) => {
      res.render('widgets', { title: 'widgets', widgets: results });
    });
  });

  router.get('/widgets/:widgetid', function(req, res) {
    var widgetid = req.params.widgetid;
    repo.getByID(widgetid, req.db, (err, result) => {
      res.render('page2', { title: 'widget', widget: result });
    });
  });
};
