require.def("sampleapp/appui/widgets/answerwidget",
  [
    "antie/widgets/button",
    "antie/widgets/label",
    "antie/widgets/image"
  ],
  function(Button, Label, Image) {
    return Button.extend({

      init : function (dataItem) {
        var self = this;
        var id = dataItem.id;
        this._super(id);
        this.setDataItem(dataItem);
        this.appendChildWidget(new Image(id,dataItem.image, {width:496}));
        this.label = new Label("");
        this.appendChildWidget(this.label);

        this.addEventListener("answerSelected",function(ev){
          self.label.setText(self._dataItem.label);
          if(self._dataItem.question_id != null){
            self.addClass("correct");
          } else if(ev.target == self){
            self.addClass("incorrect");
          } else {
            self.addClass("faded");
          }
        });
      }
    });
  }
);