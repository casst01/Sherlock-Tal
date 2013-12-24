require.def("sampleapp/appui/components/samplecarouselcomponent",
  [
      "antie/widgets/component",
      "antie/widgets/horizontalcarousel",
      "sampleapp/appui/formatters/samplewidgetformatter"

  ],
  function (Component, HorizontalCarousel, SampleWidgetFormatter) {
      return Component.extend({
          init: function() {
              this._super("samplecarouselcomponent");
              this._addEventListeners();

              this._carousel = new HorizontalCarousel(
                "samplecarousel",
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