define(
    ["jquery", "underscore"],
    function( $, _ ){
        var Render = function( templatePath ){
            var bust = "?_=" + (new Date()).getTime();

            this.jQXhr = $.get( templatePath + bust, function( content ){
                this.template = _.template( content );
            });

            return this;
        };

        Render.prototype.generate = function( data ){
            this.ready( this.jQXhr, function(){
                this.finalContent = this.template( data );
            });

            return this;
        };

        Render.prototype.output = function( location ){
            this.ready( this.jQXhr, function(){
                if( location.jquery ){
                    this.container = location;
                }
                else if( typeof location === 'string' ){
                    this.container = $( location );
                }
                else{
                    throw new TypeError( "Unknown output. Renderer accepts a DOM selector string or a jQuery object." );
                }

                this.container.html( this.finalContent );
            });

            return this;
        };

        Render.prototype.ready = function( promise, callback ){
            $.when( promise ).done( callback );
        };

        return Render;
    }
);
