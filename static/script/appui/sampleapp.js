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

				self._props = [];
				self._props['access_token'] = 'CAACEdEose0cBAKpWXT91oE6wykofTSaZCNASxZBGDJeZC514gzph8fD9t0C9i7GGetLq7GsXhOH0Pv0dR6yJYZCZBKHEgMMsGuZBmSZCFZCXPxYUY1vNi7WsQ1m7kM0Qd4ZClWiHjkKKoUXLY5jD7luKnPZAkP6lZAFERkZD';

			},

			run: function() {
				this._setRootContainer();
			},

			route: function(route) {
				this._mainController = new MainController(this);
				this._mainController.route(route);
				this.ready();
			},

			getProp: function (propName) {
				return this._props[propName] || null;
			}

		});

	}
);