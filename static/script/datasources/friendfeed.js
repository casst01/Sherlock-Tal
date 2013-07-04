require.def("sampleapp/datasources/friendfeed",
    [
        "antie/class",
        "sampleapp/datasources/datasourcebase"
    ],
    function(Class, DatasourceBase) {
        return DatasourceBase.extend({
            
            access_token: 'CAACEdEose0cBADMbaQrUqmPVyMQDY6ZAj6tvRomfcXg6HkzbZAYNHUrwoIomJwgYg4sylaDFUWoYdxDE3pSMoE0OCZBeOP6tltIPuGuJvFZBHAB3S6ZA2j7qqRurZAK0HOZCWFpwZAmfs5htqclfmIZB6u2ZA66O2gmm4ZD',
            url: 'https://graph.facebook.com/me/friends',

            loadData : function(callbacks) {
              this.xhrRequest(this.url + '?access_token=' + this.access_token, function(xhr) {
                var json = JSON.parse(xhr.response);
                callbacks.onSuccess(json.data);
              });
            }

        });
    });