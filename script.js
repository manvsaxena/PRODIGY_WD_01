window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
});

var menuItems = document.querySelectorAll('.navbar a');

menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#ddd';
        this.style.color = 'black';
    });

    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        this.style.color = 'white';
    });
});
