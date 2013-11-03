define(
    ["jquery"],
    function( $ ){
        var Transfer = {};

        Transfer.loadAnimals = function(){
            var jqXhr = $.ajax({
                "url": "/data/animals.json",
                "dataType": "json",
                "type": "get",
            });

            return jqXhr;
        };

        return Transfer;
    }
)
