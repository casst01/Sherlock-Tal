require.def('sampleapp/appui/components/simple',
	[
		'antie/widgets/component',
		'antie/widgets/button',
		'antie/widgets/label'
	],
	function(Component, Button, Label) {

		return Component.extend({

			init: function() {
				var self, label, button;
				self = this;

				this._super('simplecomponent');

				label = new Label('Hello World');
				this._button = new Button();
				this._button.appendChildWidget(label);

				this.addEventListener('beforerender', function(ev) {
					self._onBeforeRender(ev);
				});

				this.addEventListener('aftershow', function appReady(ev) {
					self.getCurrentApplication().ready();
					self.removeEventListener('aftershow', appReady);
				});
			},

			_onBeforeRender: function(ev) {
				this.appendChildWidget(this._button);
			}

		});

	}
)