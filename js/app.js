var app = angular.module("NPC", []);

app.controller("NpcCtrl", function() {
    var npc = this;
    npc.npcs = [
        {name: "Master Castellan", bio: "Master of the Greenest Keep. He\'s seen many battles and is a competent leader", img: "img/castellan.jpg"},
        {name: "Governor Nighthill", bio: "Governor of the Greenest, he helps keep peace in this simple town.", img: "img/nighthill.jpg"},
        {name: "Governor Nighthill", bio: "Governor of the Greenest, he helps keep peace in this simple town.", img: "img/nighthill.jpg"},
        {name: "Governor Nighthill", bio: "Governor of the Greenest, he helps keep peace in this simple town.", img: "img/nighthill.jpg"},
    ];
});

app.directive("shadow", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            element.addClass("shadow");
            element.children()[1].style.display = 'block';
        });

        element.bind("mouseleave", function() {
            element.removeClass("shadow");
            element.children()[1].style.display = 'none';

        });
    };

});
