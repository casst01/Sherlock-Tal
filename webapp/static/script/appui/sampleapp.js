require.def('sampleapp/appui/sampleapp',
	[
		'antie/application',
		'antie/widgets/container',
		'sampleapp/controllers/maincontroller',
		'sampleapp/models/sherlockdatasourcemanager'
	],

	function(Application, Container, MainController, SherlockDataSourceManager) {

		return Application.extend({
			
			init: function (appDiv, styleDir, imgDir, callback) {
				this._super(appDiv, styleDir, imgDir, callback);
				this._rootContainer = new Container('app');
				this._rootContainer.outputElement = appDiv;
			},

			run: function() {
				this.setRootWidget(this._rootContainer);
			},

			route: function(route) {
				var args = {
          application: this,
          dataSourceManager: new SherlockDataSourceManager()
        };
				this._mainController = new MainController(args);
				this._mainController.route(this.getDevice().getCurrentRoute());
				this.ready();
			}

		});

	}
);