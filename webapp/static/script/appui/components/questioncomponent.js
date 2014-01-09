require.def("sampleapp/appui/components/questioncomponent",
  [
      "antie/widgets/component",
      "antie/widgets/verticallist",
      "sampleapp/appui/formatters/questionformatter",
      "sampleapp/appui/widgets/answerwidget",
      "antie/events/event"

  ],
  function (Component, VerticalList, QuestionFormatter, AnswerWidget, Event) {
      return Component.extend({
          init: function() {
              this._super("questionComponent");
              this._addEventListeners();

              this._carousel = new VerticalList(
                "question",
                new QuestionFormatter()
              );

              this.appendChildWidget(this._carousel);
          },

          _addEventListeners: function(){
              var self = this;
              this.addEventListener("beforerender", function(ev) {
                  self._onBeforeRender(ev);
              });
              this.addEventListener("select", function(ev) {
                self._onAnswerSelected(ev);
              });
              this.addEventListener('focus', self._onFocus);
          },

          _onBeforeRender: function(ev) {
              this._carousel.setDataSource(ev.args.dataSource);
          },

          _onFocus: function(ev) {
              ev.stopPropagation();
          },

          _onAnswerSelected: function(ev) {
            if(ev.target instanceof AnswerWidget) {
              var event = new Event("answerSelected");
              event.target = ev.target;
              this.broadcastEvent(event);
            }
          }

      });
  }
);