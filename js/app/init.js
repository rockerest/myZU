define(
    ["underscore", "jquery"],
    function( _, $ ){
        "use strict";
        var Init = {};

        Init.startApp = function(){
            console.log( "App started." );
        };

        return Init;
    }
);
