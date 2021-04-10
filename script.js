    var imgs = document.images,
    len = imgs.length,
    counter = 0;

    [].forEach.call( imgs, function( img ) {
        if(img.complete)
        incrementCounter();
        else
        img.addEventListener( 'load', incrementCounter, false );
    } );

    function incrementCounter() {
        counter++;
        if ( counter === len ) {
            document.getElementById("loading-banner").remove()
        }
    }

