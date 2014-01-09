require.def("sampleapp/controllers/indexcontroller",
    [
        "antie/class",
        "sampleapp/appui/frames/questionframe"
    ],
    function(Class, QuestionFrame) {
        return Class.extend({

            init: function (args) {
                this._application = args.application;
                this._dataSourceManager = args.dataSourceManager;
            },

            index: function () {
                var self = this;
                var frame = new QuestionFrame();
                
                this._application._rootWidget.appendChildWidget(frame);
                var ds = this._dataSourceManager.get('sample');
                frame.getQuestionContainer().show("sampleapp/appui/components/samplecarouselcomponent", { dataSource: ds });
            }

        });
    }
);