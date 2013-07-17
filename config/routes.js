exports.routes = function (map) {
    map.resources('posts');
	
    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    map.get('/', 'home#index');
    map.post('/signin2', 'home#signin2');
    map.get('/postsList', 'posts#list');
    map.get('/postsShow/:id', 'posts#view');
};
