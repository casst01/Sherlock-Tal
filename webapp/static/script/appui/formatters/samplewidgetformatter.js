require.def("sampleapp/appui/formatters/samplewidgetformatter",
  [
      "antie/formatter",
      "sampleapp/appui/widgets/samplewidget"
  ],
  function(Formatter, Widget) {
      return Formatter.extend({
          format : function (iterator) {
            console.log("iterating");
            console.log(iterator);
              return new Widget(iterator.next());
          }
      });
  }
);