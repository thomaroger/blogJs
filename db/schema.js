/*
 db/schema.js contains database schema description for application models
 by default (when using jugglingdb as ORM) this file uses database connection
 described in config/database.json. But it's possible to use another database
 connections and multiple different schemas, docs available at

 http://railwayjs.com/orm.html

 Example of model definition:

 define('User', function () {
     property('email', String, { index: true });
     property('password', String);
     property('activated', Boolean, {default: false});
 });

 Example of schema configured without config/database.json (heroku redistogo addon):
 schema('redis', {url: process.env.REDISTOGO_URL}, function () {
     // model definitions here
 });

*/

// models

var Post = describe('Post', function () {
	property('id', Number, {index: true});
    property('title');
    property('content');
    property('createdAt', Date);
    property('userId', Number);
    set('restPath', pathTo.posts);
});

var User = describe('User', function () {
	property('id', Number, {index: true});
    property('name');
    property('password');
    property('createdAt', Date);
    set('restPath', pathTo.users);
});


// relations

User.hasMany(Post,   {as: 'posts',  foreignKey: 'userId'});
Post.belongsTo(User, {as: 'user', foreignKey: 'userId'});

