require.def("sampleapp/appui/components/simplecarouselcomponent",
    [
        "antie/widgets/component",
        "antie/datasource",
        "antie/widgets/horizontalcarousel",
        "sampleapp/appui/formatters/friendformatter",
        "sampleapp/datasources/friendfeed"

    ],
    function (Component, DataSource, HorizontalCarousel, FriendFormatter, FriendFeed) {
        return Component.extend({
            init: function() {
                var simpleFormatter, friendFeed;
                this._super("simplecarouselcomponent");
                
                simpleFormatter = new FriendFormatter();
                friendFeed = new FriendFeed();
                this._dataSource = new DataSource(this, friendFeed, "loadData");
                
                this._carousel = new HorizontalCarousel("simplecarousel", simpleFormatter);
                this.appendChildWidget(this._carousel);

                this._addEventListeners();
            },

            _addEventListeners: function(){
                var self = this;
                this.addEventListener("beforerender", function(ev) {  
                    self._onBeforeRender(ev); 
                });
                this.addEventListener('aftershow', function appReady(ev) {
                    self.getCurrentApplication().ready();
                    self.removeEventListener('aftershow', appReady);
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