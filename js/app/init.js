define(
    ["route"],
    function( Route ){
        "use strict";
        var Init = {};

        Init.startApp = function(){
            console.log( "App started." );
            Route.start();
        };

        return Init;
    }
);
