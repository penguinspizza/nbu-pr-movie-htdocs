// IDにリンクしたときの位置をナビバーの高さ分だけ下にずらす
$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = -80;
    var speed = 0;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// ナビバー押したら閉じる
$(".navbar-nav>.close-item>a , .dropdown-menu>li>a").on("click", function () {
  if (this.id != "navbarDropdown") {
    $(".navbar-collapse").collapse("hide");
  }
  $("#navbarDropdownMenuLink").attr('aria-expanded', false); // ドロップダウンも閉じる
  $("#navbarDropdownMenuBody").hide.bs.dropdown(); // ドロップダウンも閉じる
});

// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').on('show.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});
