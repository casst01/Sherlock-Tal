require.def("sampleapp/datasources/friendfeed",
    [
        "antie/class",
        "sampleapp/datasources/datasourcebase"
    ],
    function(Class, DatasourceBase) {
        return DatasourceBase.extend({
            
            access_token: 'CAACEdEose0cBAJQnx0rbEeVnC2OI8VlrbQnAkPgGHapkDjqEyAAQPu5hnwnWuwcI36AqX05GQMUuMojlN3iAI5nlcOqJNa5M6i4NYg1mDrTaTqE2HdyTJhZCFAezQoqhG8ybC9UPoWL0Stzbuk6x3cRuRdXQZD',
            url: 'https://graph.facebook.com/me/friends',

            loadData : function(callbacks) {
              this.loadJSON(
                this.url + '?access_token=' + this.access_token, 
                callbacks.onSuccess
              );
            }

        });
    });