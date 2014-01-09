require.def("sampleapp/appui/widgets/questionwidget",
  [
    "antie/widgets/list",
    "antie/widgets/label",
    "antie/widgets/grid",
    "antie/widgets/container",
    "antie/widgets/button",
    "sampleapp/appui/widgets/answerwidget"
  ],
  function(List, Label, Grid, Container, Button, AnswerWidget) {
    return List.extend({

      init : function (dataItem) {
        var id = dataItem.id;
        this._super(id);
        this.setDataItem(dataItem);
        this.createChildWidgets();
      },

      createChildWidgets: function() {
        this.createQuestion();
        this.createAnswers();
        this.createNext();
      },

      createQuestion: function() {
        var title = new Label(this._dataItem.text);
        title.addClass('title');
        this.appendChildWidget(title);
      },

      createAnswers: function() {
        this._randomizeAnswers(this._dataItem.answers);

        var answersGrid = new Grid('grid', 2,2);
        answersGrid.addClass('answer-container');

        var row = 0;
        var col = 0;
        for(var i = 0; i < this._dataItem.answers.length; i++) {
          this._dataItem.answers[i].id = this._dataItem.answers[i].id + "";
          var answer = new AnswerWidget(this._dataItem.answers[i]);
          answer.addClass('answer');
          if(i % 2 == 0) row++;
          console.log(row - 1, (i % 2));
          answersGrid.setWidgetAt(row - 1, i % 2, answer);
        }
        this.appendChildWidget(answersGrid);
      },

      createNext: function() {
        var self = this;
        var nextContainer = new Container();
        var nextButton = new Button();
        var nextLabel = new Label("next");
        nextButton.appendChildWidget(nextLabel);
        nextContainer.appendChildWidget(nextButton);
        nextButton.addClass('next-button');
        nextContainer.addClass('next-container');
        nextLabel.addClass('next-label');
        this.appendChildWidget(nextContainer);

        nextButton.addEventListener('select', function(ev){
          if(ev.target instanceof Button)
            location.reload();
        });
        this.addEventListener("select", function(){
          self.setActiveChildWidget(nextContainer);
        })
      },

      _randomizeAnswers: function(array) {
        var i = array.length, j, swap;
        while (--i) {
          j = Math.random() * (i + 1) | 0;
          swap = array[i];
          array[i] = array[j];
          array[j] = swap;
        }
      }

    });
  }
);