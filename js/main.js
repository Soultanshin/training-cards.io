const scrollRevealOptions = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal(".hero-content .title",{
   ...scrollRevealOptions,
});

ScrollReveal().reveal(".hero-content .sub-title",{
   ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal(".hero-content .btn-wrapper",{
   ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal(".hero-content .text",{
   ...scrollRevealOptions,
    delay: 1500,
});

ScrollReveal().reveal(".socials .socials-title",{
   ...scrollRevealOptions,
    delay: 2000,
});

ScrollReveal().reveal(".socials .socials-ico",{
   ...scrollRevealOptions,
    delay: 2500,
});

ScrollReveal().reveal(".copy",{
    ...scrollRevealOptions,
    delay: 3000,
});
