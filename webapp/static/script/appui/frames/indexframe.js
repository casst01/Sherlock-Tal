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
                this._sampleContainer = new ComponentContainer('sampleContainer');
                this.appendChildWidget(this._sampleContainer);
            },

            getSampleContainer: function () {
                return this._sampleContainer;
            }

        });
    });