require.def("sampleapp/appui/components/facebook/albumscarouselcomponent",
    [
        "antie/widgets/component",
        "antie/datasource",
        "antie/widgets/horizontalcarousel",
        "sampleapp/appui/formatters/facebook/albumformatter",
        "sampleapp/datasources/facebook/albums"

    ],
    function (Component, DataSource, HorizontalCarousel, AlbumFormatter, FacebookAlbums) {
        return Component.extend({
            init: function() {
                this._super("albumscarouselcomponent");
                this._addEventListeners();

                this._dataSource = new DataSource(
                    this,
                    new FacebookAlbums(this.getCurrentApplication().getAccessToken()),
                    "loadData"
                );
                
                this._carousel = new HorizontalCarousel(
                    "albumscarousel",
                    new AlbumFormatter()
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
                this._carousel.setDataSource(this._dataSource);
            },

            _onFocus: function(ev) {
                ev.stopPropagation();
            }
            
        });
    }
);