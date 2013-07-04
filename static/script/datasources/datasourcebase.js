require.def("sampleapp/datasources/datasourcebase",
    [
        "antie/class"
    ],
    function(Class) {
        return Class.extend({

            xhrRequest: function(url, callback) {
              xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function() {  
                if((xhr.readyState < 4) || xhr.status !== 200) return;  
                callback(xhr);  
              };  
            
              xhr.open('GET', url, true);  
              xhr.send(''); 
            }

        });
    });