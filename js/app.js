window.addEventListener('load', () => setTheme(Cookies.get('theme')), false);

$('i').click((e) => {
  var currentIcon = e.currentTarget.innerHTML;
  if (currentIcon == 'remove_circle') {
    e.currentTarget.innerHTML = 'radio_button_unchecked';
  } else if (currentIcon == 'radio_button_unchecked') {
    e.currentTarget.innerHTML = 'check_circle';
  } else if (currentIcon == 'check_circle') {
    e.currentTarget.innerHTML = 'add_circle';
  } else if (currentIcon == 'add_circle') {
    e.currentTarget.innerHTML = 'remove_circle';
  }
});

let el = document.getElementsByClassName('mdl-layout__content')[0];
swipedetect(el, (dir) => {
  console.log(dir);
  let goto = $('.is-active').attr('href');
  if (dir == 'left' ) {
    if (goto == '#suspects') {
      goto = '#weapons';
    } else if (goto == '#weapons') {
      goto = '#rooms';
    }
  } else if (dir == 'right') {
    if (goto == '#weapons') {
      goto = '#suspects';
    } else if (goto == '#rooms') {
      goto = '#weapons';
    }
  }
  $('a.mdl-layout__tab').removeClass('is-active');
  $('a[href="' + goto + '"]').addClass('is-active');
  $('.mdl-layout__tab-panel').removeClass('is-active');
  $(goto).addClass('is-active');
});

window.onbeforeunload = function() {
  return "";
}

$('.fab').click((e) => {
  $("#tabContent").toggle();
  $("#tabs").toggle();
  $("#hidden").toggle();
  if ($('#fabicon')[0].textContent === 'visibility_off') {
    $('#fabicon')[0].textContent = 'visibility';
  } else {
    $('#fabicon')[0].textContent = 'visibility_off';
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://co2p.github.io/CluedoCardJS/sw.js')
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
