require.def('sampleapp/appui/sampleapp',
	[
		'antie/application',
		'antie/widgets/container',
		'sampleapp/controllers/maincontroller',
		'sampleapp/lib/facebook'
	],

	function(Application, Container, MainController, FB) {

		return Application.extend({
			
			init: function (appDiv, styleDir, imgDir, callback) {
				var self = this;
				self._super(appDiv, styleDir, imgDir, callback);
				self._fb = new FB('407261462723217', 'http://app1.tal.com');

				self._setRootContainer = function() {
					var container = new Container();
					container.outputElement = appDiv;
					self.setRootWidget(container);
				}
			},

			run: function() {
				this._setRootContainer();
			},

			route: function(route) {
				if(!this._accessToken) {
					if(this._routeContainsAccessToken(route)) {
						this._fb._parseAccessToken(route[0]);
						this._accessToken = this._fb.getAccessToken();
					} else {
						this._fb.redirect();
					}
				}

				this._mainController = new MainController(this);
				this._mainController.route(route);
				this.ready();
			},

			getAccessToken: function () {
				return this._accessToken;
			},

			_routeContainsAccessToken: function(route) {
				if(route.length > 0) {
					return route[0].indexOf('access_token') > -1;
				} else {
					return false;
				}
			},

		});

	}
);