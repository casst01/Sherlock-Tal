require.def("sampleapp/datasources/simplefeed",
    [
        "antie/class"
    ],
    function(Class) {
        return Class.extend({
            loadData : function(callbacks) {
                callbacks.onSuccess(
                    [
                        {
                            "id":"1",
                            "title":"cherry"
                        },
                        {
                            "id":"2",
                            "title":"strawberry"
                        },
                        {
                            "id":"3",
                            "title":"peach"
                        },
                        {
                            "id":"4",
                            "title":"apple"
                        },
                        {
                            "id":"5",
                            "title":"melon"
                        }
                    ]
                );
            }
        });
    });