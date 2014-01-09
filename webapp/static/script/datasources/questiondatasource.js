require.def("sampleapp/datasources/questiondatasource",
  [
    "antie/class",
    "sampleapp/datasources/datasourcebase"
  ],
  function(Class, DataSourceBase) {
    return DataSourceBase.extend({

      init: function(component, obj, func, args) {
        this._super(component, obj, func, args, 'question');
      },

      getUrl: function () {
        var id = Math.floor(Math.random() * 10) + 15898;
        return 'http://quizengine.sherlock.pilots.bbcconnectedstudio.co.uk/questions/'+ id +'?withSimilarAnswers=1'
      }

    });
  });