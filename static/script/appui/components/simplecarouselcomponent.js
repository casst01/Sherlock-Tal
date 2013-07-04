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
                var self, simpleFormatter, friendFeed;
                
                // make sure you call _super()!
                this._super("simplecarouselcomponent");
                self = this;
                
                // Create a new formatter and feed
                simpleFormatter = new FriendFormatter();
                friendFeed = new FriendFeed();
                
                // Create a DataSource, this uses the feed to get data and presents it to the formatter
                this._dataSource = new DataSource(this, friendFeed, "loadData");
                
                // Create a new carousel with the formatter
                this._carousel = new HorizontalCarousel("simplecarousel", simpleFormatter);
                
                // Add it to the component
                this.appendChildWidget(this._carousel);
                
                // We want to rebind every time the component is pushed, so listen for beforerender.           
                this.addEventListener("beforerender", function(ev) {  
                        self._onBeforeRender(ev); 
                    }
                );

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