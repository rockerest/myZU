define(
    ["route"],
    function( Route ){
        "use strict";
        var Init = {};

        Init.startApp = function(){
            Route.start();
        };

        return Init;
    }
);
