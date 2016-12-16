		// initialize and setup facebook js sdk
		window.fbAsyncInit = function() {
		    FB.init({
		      appId      : '1866035216951680',
		      xfbml      : true,
		      version    : 'v2.8'
		    });
		    FB.getLoginStatus(function(response) {
		    	if (response.status === 'connected') {
		    		document.getElementById('status').innerHTML = 'We are connected.';
		    	} else if (response.status === 'not_authorized') {
		    		document.getElementById('status').innerHTML = 'We are not logged in.'
		    	} else {
		    		document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    	}
		    });
		};
		(function(d, s, id){
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) {return;}
		    js = d.createElement(s); js.id = id;
		    js.src = "https://connect.facebook.net/en_US/sdk.js";
		    fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		
		// login with facebook with extra permissions
		function login() {
			FB.login(function(response) {
				if (response.status === 'connected') {
		    		document.getElementById('status').innerHTML = 'We are connected.';
		    		window.location.href = "first_time";
					}
		        else if (response.status === 'not_authorized') {
		    		document.getElementById('status').innerHTML = 'We are not logged in.'
		    	} else {
		    		document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    	}
			}, {scope: 'email'});
		}

		
		// getting basic user info
		function getName() {
  			setTimeout(
				function () {
					FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, function(response) {
						document.getElementById('resposta1').innerHTML = response.name;
						});
				} , 600);
		}

		function getNameforUser() { //only for the p2p file
  			setTimeout(
				function () {
					FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, function(response) {
						return response.name;
						});
				} , 600);
		}

		function getPic() {
			setTimeout(
				function () {
			FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, function(response) {
				document.getElementById('resposta').innerHTML = "<img src='" + response.picture.data.url + "' style='border-radius:50%;border:6px solid #3dd379;width:10%; margin-top: 20px;'>";
			});
			} , 600);
		}

		function getPic2() {
			setTimeout(
				function () {
			FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(75).height(75)'}, function(response) {
				document.getElementById('resposta').innerHTML = "<img src='" + response.picture.data.url + "' style='border-radius:50%;border:5px solid #0aa046;margin-top:5px;'>";
			});
			} , 600);
		}

		function getId() {
			setTimeout(
				function () {
			FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, function(response) {
				document.getElementById('resposta2').innerHTML = "Your Id is : " + response.id ;
			});
			} , 600);
		}

		function getName2() {
  			setTimeout(
				function () {
					FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, function(response) {
						document.getElementById('resposta2').innerHTML = "Hi " + response.first_name + ", your life as a <strong>stockbroker</strong> has just begun.";
						});
				} , 600);
  		}
