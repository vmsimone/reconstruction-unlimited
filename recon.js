function openAboutPage() {
  $('main').html(``);
}

function navListener(id, callback) {
  $(id).on('click', callback);
}

function readyNavLinks() {
  openAboutPage();
}

$(readyNavLinks);