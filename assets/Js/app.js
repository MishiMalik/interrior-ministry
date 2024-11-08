
// home news slider

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/left-slik.svg" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/right-slick.svg" alt="Next"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.ministry').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/left-slik.svg" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/right-slick.svg" alt="Next"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.autoplay2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/right-slick.svg" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/left-slik.svg" alt="Next"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.ministry2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/right-slick.svg" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/left-slik.svg" alt="Next"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
// on scroll animation
AOS.init();

// top home carousel speed
var myCarousel = document.querySelector('#carouselExampleIndicators');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 10000 // Interval in milliseconds
});

// menu sidebars
// Select all buttons, sidebars, and close buttons inside the sidebars
const buttons = document.querySelectorAll('.fixed-menu .menu-btn');
const sidebars = document.querySelectorAll('.sidebar');
const closeButtons = document.querySelectorAll('.close-sidebar');

// Function to show the sidebar for a given button and hide others
function openSidebar(button) {
    // Close all sidebars
    sidebars.forEach(sidebar => sidebar.classList.remove('active'));

    // Remove 'active-menu' from all buttons
    buttons.forEach(btn => btn.classList.remove('active-menu'));

    // Add 'active-menu' to the clicked button
    button.classList.add('active-menu');

    // Determine the sidebar to open based on button class
    if (button.classList.contains('features')) {
        document.querySelector('.features-sidebar').classList.add('active');
    } else if (button.classList.contains('review')) {
        document.querySelector('.review-sidebar').classList.add('active');
    } else if (button.classList.contains('call')) {
        document.querySelector('.call-sidebar').classList.add('active');
    } else if (button.classList.contains('share')) {
        document.querySelector('.share-sidebar').classList.add('active');
    }
}

// Function to close the sidebar and reset button active state
function closeSidebar(closeBtn) {
    // Close the corresponding sidebar
    const sidebar = closeBtn.closest('.sidebar');
    if (sidebar) {
        sidebar.classList.remove('active');
    }

    // Remove 'active-menu' from all buttons
    buttons.forEach(btn => btn.classList.remove('active-menu'));
}

// Add click event listeners to all menu buttons
buttons.forEach(button => {
    button.addEventListener('click', () => openSidebar(button));

    button.addEventListener('click', function () {
        $(".backdrop").css("display", "block");
        $("body").css("overflow", "hidden");
    })
});

// Add click event listener to each close button inside the sidebars
closeButtons.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => closeSidebar(closeBtn));
    closeBtn.addEventListener('click', function () {
        $(".backdrop").css("display", "none");
        $("body").css("overflow", "scroll");
    })
});

// rating
window.addEventListener("DOMContentLoaded", () => {
    const starRating = new StarRating("form");
});

class StarRating {
    constructor(qs) {
        this.ratings = [
            { id: 1, name: "Terrible" },
            { id: 2, name: "Bad" },
            { id: 3, name: "OK" },
            { id: 4, name: "Good" },
            { id: 5, name: "Excellent" }
        ];
        this.rating = null;
        this.el = document.querySelector(qs);

        this.init();
    }
    init() {
        this.el?.addEventListener("change", this.updateRating.bind(this));

        // stop Firefox from preserving form data between refreshes
        try {
            this.el?.reset();
        } catch (err) {
            console.error("Element isn’t a form.");
        }
    }
    updateRating(e) {
        // clear animation delays
        Array.from(this.el.querySelectorAll(`[for*="rating"]`)).forEach(el => {
            el.className = "rating__label";
        });

        const ratingObject = this.ratings.find(r => r.id === +e.target.value);
        const prevRatingID = this.rating?.id || 0;

        let delay = 0;
        this.rating = ratingObject;
        this.ratings.forEach(rating => {
            const { id } = rating;

            // add the delays
            const ratingLabel = this.el.querySelector(`[for="rating-${id}"]`);

            if (id > prevRatingID + 1 && id <= this.rating.id) {
                ++delay;
                ratingLabel.classList.add(`rating__label--delay${delay}`);
            }

            // hide ratings to not read, show the one to read
            const ratingTextEl = this.el.querySelector(`[data-rating="${id}"]`);

            if (this.rating.id !== id)
                ratingTextEl.setAttribute("hidden", true);
            else
                ratingTextEl.removeAttribute("hidden");
        });
    }
}
// chat help
$("#help").on("click", function () {
    $(".chat").css("display", "block");
    $(".backdrop2").css("display", "block");
})
$(".close-chat").on("click", function () {
    $(".chat").css("display", "none");
    $(".backdrop2").css("display", "none");
})





