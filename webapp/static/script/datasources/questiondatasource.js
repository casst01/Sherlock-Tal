require.def("sampleapp/datasources/questiondatasource",
  [
    "antie/class",
    "sampleapp/datasources/datasourcebase"
  ],
  function(Class, DataSourceBase) {
    return DataSourceBase.extend({

      url: 'http://quizengine.sherlock.pilots.bbcconnectedstudio.co.uk/questions/15897',

      init: function(component, obj, func, args) {
        this._super(component, obj, func, args, 'question');
      }

    });
  });