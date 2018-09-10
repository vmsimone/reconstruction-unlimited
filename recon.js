function showAbout() {
  console.log('showing about');
  $('main').animate({
        left: '-100%'
  });
  //   $('main').append(`
    
  // `);
}

function readyScroll(callback) {
  console.log('readied');
  $('button').click(callback);
}

$(readyScroll(showAbout));