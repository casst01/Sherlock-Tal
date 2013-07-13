require.def("sampleapp/appui/components/facebook/albumphotoscarouselcomponent",
    [
        "antie/widgets/component",
        "antie/datasource",
        "antie/widgets/horizontalcarousel",
        "sampleapp/appui/formatters/facebook/albumphotoformatter",
        "sampleapp/datasources/facebook/albumphotos"

    ],
    function (Component, DataSource, HorizontalCarousel, AlbumPhotoFormatter, FacebookAlbumPhotos) {
        return Component.extend({
            init: function() {
                this._super("albumphotoscarouselcomponent");
                this._addEventListeners();

                this._dataSource = new DataSource(
                    this,
                    new FacebookAlbumPhotos(this.getCurrentApplication().getAccessToken()),
                    "loadData"
                );
                
                this._carousel = new HorizontalCarousel(
                    "albumphotoscarousel",
                    new AlbumPhotoFormatter()
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