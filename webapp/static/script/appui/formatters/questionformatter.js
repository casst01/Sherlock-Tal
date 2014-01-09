require.def("sampleapp/appui/formatters/questionformatter",
  [
    "antie/formatter",
    "sampleapp/appui/widgets/questionwidget"
  ],
  function(Formatter, Widget) {
    return Formatter.extend({
      format : function (iterator) {
        return new Widget(iterator.next());
      }
    });
  }
);