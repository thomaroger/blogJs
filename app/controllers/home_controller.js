load('application');

action('index', function () {
  render({
    title: "Connexion"
  });
});


action('signin2', function () {
	User.findOne({where : {name : req.body.username, password : req.body.password}}, function(err, user) {
		if (err) {
			console.log(err);
		}
		if (user) {
			req.session.user = user.id;
			redirect('posts');
			return;
		}
		redirect("/");
	});


});
