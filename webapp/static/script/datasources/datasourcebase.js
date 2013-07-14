require.def("sampleapp/datasources/datasourcebase",
    [
        "antie/datasource"
    ],
    function(DataSource) {
        return DataSource.extend({

          init: function(component, obj, func, args, dataSourceId) {
            args = args || [];
            this._super(component, obj, func, args.concat([dataSourceId]));
          }

        });
    });