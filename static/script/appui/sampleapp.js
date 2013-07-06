require.def('sampleapp/appui/sampleapp',
	[
		'antie/application',
		'antie/widgets/container',
		'sampleapp/controllers/maincontroller'
	],

	function(Application, Container, MainController) {

		return Application.extend({
			
			init: function (appDiv, styleDir, imgDir, callback) {

				var self = this;
				self._super(appDiv, styleDir, imgDir, callback);

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
				this._mainController = new MainController(this);
				this._mainController.route(route);
				this.ready();
			}

		});

	}
);