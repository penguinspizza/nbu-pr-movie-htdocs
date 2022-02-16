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

// 別ページidリンク位置合わせ
$(function () {
  // 別ページの場合は以下
  var urlHash = location.hash;
  if (urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      // ヘッダー固定の場合はヘッダーの高さを数値で入れる、固定でない場合は0
      var headerHight = 0;
      var target = $(urlHash);
      var position = target.offset().top - headerHight;
      $('body,html').stop().animate({ scrollTop: position }, 400);
    }, 100);
  }
});