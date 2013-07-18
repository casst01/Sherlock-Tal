require.def('sampleapp/appui/sampleapp',
	[
		'antie/application',
		'antie/widgets/container',
		'sampleapp/controllers/maincontroller',
		'sampleapp/lib/facebook',
		'sampleapp/models/facebookdatasourcemanager'
	],

	function(Application, Container, MainController, FB, DataSourceManager) {

		return Application.extend({
			
			init: function (appDiv, styleDir, imgDir, callback) {
				this._super(appDiv, styleDir, imgDir, callback);
				this._fb = new FB('506651482737548', 'http://localhost/git/fbontal/', ['user_photos']);

				this._rootContainer = new Container('app');
				this._rootContainer.outputElement = appDiv;
			},

			run: function() {
				this.setRootWidget(this._rootContainer);
			},

			route: function(route) {
				if(!this._fb.hasAccessToken()) {
					if(this._routeContainsAccessToken(route)) {
						this._fb._parseAccessToken(route[0]);
						this.getDevice().setCurrentRoute(['index', 'index']);
					} else {
						this._fb.redirect();
					}
				}

				var args = {
					application: this,
					dataSourceManager: new DataSourceManager({ accessToken: this.getAccessToken()})
				}
				this._mainController = new MainController(args);
				this._mainController.route(this.getDevice().getCurrentRoute());
				this.ready();
			},

			getAccessToken: function () {
				return this._fb.getAccessToken();
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