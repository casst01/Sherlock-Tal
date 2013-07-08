require.def("sampleapp/appui/components/simplecarouselcomponent",
    [
        "antie/widgets/component",
        "antie/datasource",
        "antie/widgets/horizontalcarousel",
        "sampleapp/appui/formatters/facebook/friendformatter",
        "sampleapp/datasources/facebook/friends"

    ],
    function (Component, DataSource, HorizontalCarousel, FriendFormatter, FacebookFriends) {
        return Component.extend({
            init: function() {
                this._super("simplecarouselcomponent");
                this._addEventListeners();

                this._dataSource = new DataSource(
                    this,
                    new FacebookFriends(this.getCurrentApplication().getAccessToken()),
                    "loadData"
                );
                
                this._carousel = new HorizontalCarousel(
                    "simplecarousel",
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
                // do the bind (and build the carousel's items)
                this._carousel.setDataSource(this._dataSource);
            },

            _onFocus: function(ev) {
                ev.stopPropagation();
            }
            
        });
    }
);