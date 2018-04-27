$("[data-toggle=navbar-collapse]").on("click",function(){
  let target = $(this).attr("data-target");
  $("#" + target).parents("nav").toggleClass("open");
});
