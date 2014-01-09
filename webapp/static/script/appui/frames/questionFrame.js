require.def("sampleapp/appui/frames/questionframe",
  [
    "antie/widgets/verticallist",
    "antie/widgets/componentcontainer"
  ],
  function(VerticalList, ComponentContainer) {
    return VerticalList.extend({

      init: function () {
        this._super('questionFrame');
        this._addComponentContainers();
      },

      _addComponentContainers: function () {
        this._questionContainer = new ComponentContainer('questionContainer');
        this.appendChildWidget(this._questionContainer);
      },

      getQuestionContainer: function () {
        return this._questionContainer;
      }

    });
  });