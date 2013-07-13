require.def("sampleapp/appui/components/facebook/friendscarouselcomponent",
    [
        "antie/widgets/component",
        "antie/widgets/horizontalcarousel",
        "sampleapp/appui/formatters/facebook/friendformatter"

    ],
    function (Component, HorizontalCarousel, FriendFormatter) {
        return Component.extend({
            init: function() {
                this._super("friendscarouselcomponent");
                this._addEventListeners();

                this._carousel = new HorizontalCarousel(
                    "friendscarousel",
                    new FriendFormatter()
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