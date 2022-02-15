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
