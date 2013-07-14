require.def("sampleapp/appui/frames/indexframe",
    [
        "antie/widgets/verticallist",
        "antie/widgets/componentcontainer"
    ],
    function(VerticalList, ComponentContainer) {
        return VerticalList.extend({

            init: function () {
                this._super('indexFrame');
                this._addComponentContainers();
            },

            _addComponentContainers: function () {
                this._albumsContainer = new ComponentContainer('albumsContainer');
                this._albumPhotosContainer = new ComponentContainer('albumPhotosContainer');

                this.appendChildWidget(this._albumsContainer);
                this.appendChildWidget(this._albumPhotosContainer);
            },

            getAlbumsContainer: function () {
                return this._albumsContainer;
            },

            getAlbumPhotosContainer: function () {
                return this._albumPhotosContainer;
            }

        });
    });