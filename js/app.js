$("[data-toggle=navbar-collapse]").on("click",function(){
  let target = $(this).attr("data-target");
  $("#" + target).parents("nav").toggleClass("open");
});
$(".navbar ul.nav a:not([data-toggle=subnavbar-collapse])").on("click", function(){
  $(this).parents("nav").removeClass("open");
  $(this).parents("nav").find(".subnav").removeClass("open");
  $(this).parents("nav").find("[data-toggle=subnavbar-collapse]").removeClass("active");
});
$("[data-toggle=subnavbar-collapse]").on("click",function(){
  $(this).siblings("ul.subnav").toggleClass("open");
  $(this).toggleClass("active");
});
$("nav .subnav a").on("click", function(){
  $(this).parents(".subnav").removeClass("open");
});
