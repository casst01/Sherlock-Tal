require.def("sampleapp/datasources/sampledatasource",
  [
    "antie/class",
    "sampleapp/datasources/datasourcebase"
  ],
  function(Class, DataSourceBase) {
      return DataSourceBase.extend({

        useMock: true,

        mockData: [
          { id: "item_1", title: 'Item 1' },
          { id: "item_2", title: 'Item 2' },
          { id: "item_3", title: 'Item 3' },
          { id: "item_4", title: 'Item 4' },
          { id: "item_5", title: 'Item 5' }
        ],

        init: function(component, obj, func, args) {
         this._super(component, obj, func, args, 'sample');
        }

      });
  });