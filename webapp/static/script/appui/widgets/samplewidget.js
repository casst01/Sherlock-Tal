require.def("sampleapp/appui/widgets/samplewidget",
  [
    "antie/widgets/button",
    "antie/widgets/label"
  ],
  function(Button, Label) {
      return Button.extend({

          init : function (dataItem) {
              var id = dataItem.id;
              this._super(id);
              this.setDataItem(dataItem);
              this.appendChildWidget(new Label(dataItem.title));
          }

      });
  }
);