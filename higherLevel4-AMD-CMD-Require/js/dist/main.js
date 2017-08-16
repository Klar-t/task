requirejs.config({
    baseUrl:"js/dist",
    paths:{
        "jquery":"jquery-2.1.4",
        "carouse":"../app/carouse",
        "waterfalls":"../app/waterfalls"
    }
});
requirejs(['jquery','carouse','waterfalls'],function  ($,carouse,waterfalls) {
    Carouse2.init(".carousel");
});