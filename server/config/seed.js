/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Fully Certified and Insured',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : '3m Certified Graphic Installers',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Vehicle Graphic Applications',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Large Scale Building Applications',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Stadium & Trade Shows',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Special Project Management & Execution',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name: 'Local 137 AFL / CIO',
    info: ' '
    });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Brett',
    email: 'BrettmCavanagh@outlook.com',
    password: 'Gh0stw0lf123'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Jay',
    email: 'atozunlim@aol.com',
    password: 'Gh0st123'
   },function() {
      console.log('finished populating users');
    }
  );
});
