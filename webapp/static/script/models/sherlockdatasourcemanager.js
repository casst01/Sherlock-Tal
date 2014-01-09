require.def("sampleapp/models/sherlockdatasourcemanager",
  [
    "sampleapp/models/datasourcemanager",
    "sampleapp/datasources/questiondatasource"
  ],
  function(DataSourceManager, QuestionDataSource) {
    return DataSourceManager.extend({

      init: function(args) {
        this._super();

        this._addDataSourceClasses({
          'question': QuestionDataSource
        });
      }

    });
  }
);