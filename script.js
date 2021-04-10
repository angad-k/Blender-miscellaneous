    var imgs = document.images,
    len = imgs.length,
    counter = 0;

    [].forEach.call( imgs, function( img ) {
        if(img.complete)
        incrementCounter();
        else
        img.addEventListener( 'load', incrementCounter, false );
    } );
    var opacity = 1;
    function lto() {
        var box = document.getElementById('loading-banner');
        opacity -= 0.05;
        if (opacity < 0)
            {document.getElementById("loading-banner").remove(); return;}
        box.style.opacity = opacity;
        requestAnimationFrame(lto);
    }

    function incrementCounter() {
        counter++;
        document.getElementById("loader").style.width = '' + counter/len*100 + '%'
        if ( counter === len ) {           
            lto()
        }
    }

    