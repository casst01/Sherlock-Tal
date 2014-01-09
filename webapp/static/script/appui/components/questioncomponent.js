require.def("sampleapp/appui/components/questioncomponent",
  [
      "antie/widgets/component",
      "antie/widgets/list",
      "sampleapp/appui/formatters/samplewidgetformatter"

  ],
  function (Component, List, SampleWidgetFormatter) {
      return Component.extend({
          init: function() {
              this._super("questionComponent");
              this._addEventListeners();

              this._carousel = new List(
                "question",
                new SampleWidgetFormatter()
              );

              this.appendChildWidget(this._carousel);
          },

          _addEventListeners: function(){
              var self = this;
              this.addEventListener("beforerender", function(ev) {
                  self._onBeforeRender(ev);
              });
              this.addEventListener('focus', self._onFocus);
          },

          _onBeforeRender: function(ev) {
              this._carousel.setDataSource(ev.args.dataSource);
          },

          _onFocus: function(ev) {
              ev.stopPropagation();
          }

      });
  }
);