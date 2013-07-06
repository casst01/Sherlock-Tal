require.def("sampleapp/datasources/friendfeed",
    [
        "antie/class",
        "sampleapp/datasources/datasourcebase"
    ],
    function(Class, DatasourceBase) {
        return DatasourceBase.extend({
            
            access_token: 'CAACEdEose0cBAGhfPbbg69pV8gmr4R7Nsj5ocZAozv7VudkZBI0T7curyLbTXnExkzowzx3D6aTLMBcu36MHPzEptMw6iJGfVcDOh1ZABAdGdhenmlqN8z6ZCxGvuZCku3QkSdpx73xGSE4APEfvKBvMYKZCSG1tQZD',
            url: 'https://graph.facebook.com/me/friends',

            loadData : function(callbacks) {
              this.loadJSON(
                this.url + '?access_token=' + this.access_token, 
                callbacks.onSuccess
              );
            }

        });
    });