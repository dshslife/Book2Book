

document.addEventListener('scroll', function() {
        var currentScrollValue = document.documentElement.scrollTop;
        console.log(currentScrollValue);

        if (currentScrollValue > 80) {
                $('.bar').css('height', 60);
        } else {
                $('.bar').css('height', 0);
        }


        if (currentScrollValue > 175) {
                $('#back-img').css('filter', 'hue-rotate(30deg)');
        } else {
                $('#back-img').css('filter', 'hue-rotate(0deg)');
        }

        if (currentScrollValue > $('#box-frame').offset().top - 400) {
                $('#box-frame').css('width', '80%');
                $('#box-frame').css('border', '0.01px solid rgb(231, 231, 231)');
        } else {
                $('#box-frame').css('width', '0%');
                $('#box-frame').css('left', '50%');
                $('#box-frame').css('border', '0px solid rgb(231, 231, 231)');
        }

});
