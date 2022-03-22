let date = document.getElementById('date');

// get the current hijri date
let hijriFormat =  new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());

date.innerHTML = hijriFormat

$('.carousell').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 10,
    responsive: {
        0: {
            items: 2,
            margin:0
        },
        600: {
            items: 3,
        },
        1000: {
            items: 6,
        }
    }
});