define(
    ["jquery", "underscore", "sammy", "render", "transfer"],
    function( $, _, Sammy, Render, Transfer ){
        var Route = {},
            router = Sammy();

        Route.start = function(){
            Route.define();
            router.run( "#/" );
        };

        Route.define = function(){

            router.get( '#/', function( context ){
                var view = new Render( "/content/main.html" );

                view.generate()
                    .output( $( "body" ) );
            });

            router.get( '#/animals[/]?', function( context ){
                var view = new Render( "content/templates/animals/list.html" ),
                    animals = Transfer.loadAnimals();

                animals.done( function( data ){
                    view.generate( {animals: data} )
                        .output( $( "body" ) );
                });
            });

            router.get( '#/animals/animal/:id[/]?', function( context ){
                var view = new Render( "content/templates/animals/animal.html" ),
                    animals = Transfer.loadAnimals();

                animals.done( function( data ){
                    var animal = data[ context.params['id'] ];

                    view.generate( { animal: animal } )
                        .output( $( "body" ) );
                });
            });
        }

        return Route;
    }
);
