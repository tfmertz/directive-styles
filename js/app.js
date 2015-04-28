var app = angular.module("NPC", []);

app.controller("NpcCtrl", function($timeout) {
    var npc = this;
    // npc.npcs = [
    //     {name: "Master Castellan", bio: "Master of the Greenest Keep. He\'s seen many battles and is a competent leader", img: "img/castellan.jpg"},
    //     {name: "Governor Nighthill", bio: "Governor of the Greenest, he helps keep peace in this simple town.", img: "img/nighthill.jpg"},
    //     {name: "Leosin Erlanthar", bio: "Monk and ultimate GOOD guy in the campaign...but you never know.", img: "img/leosin.png"},
    //     {name: "Langdedrosa Cyanwrath", bio: "The half-dragon that totally kicked spyro's ass.", img: "img/cyanwrath.png"},
    //     {name: "Ratty McRatterson", bio: "Phuz met Ratty McRatterson by happenstance, but he has quickly become one of most important members of the party.", img: "img/ratty.png"},
    //
    // ];

    npc.fb = new Firebase("https://crackling-fire-9889.firebaseio.com/");

    npc.fb.on('value', function(data) {
        var fbnpc = data.val() !== null ? data.val() : "No Data";
        npc.npcs = fbnpc;
        console.log(fbnpc);
    });

    $timeout(function() {

    }, 1000);
    //npc.fb.set(npc.npcs);
    // fb.on("child_added", function(data) {
    //     var name = data.val() ? data.val().name : "";
    //     alert("My name is " + name);
    // });
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
