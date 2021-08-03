import jQuery from 'jquery'
import $ from 'jquery'
(function ($) {
})(window.jQuery)
function openCity (evt, cityName) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }
  document.getElementById(cityName).style.display = 'block'
  evt.currentTarget.className += ' active'
}
$(document).ready(function () {
  if (window.location.href.indexOf('3d-architectural-visualization') > -1) {
    $('.tablaps1 .tab .tablinks').removeClass('active')
    $('.tablaps1 .tab .tablinks:nth-child(1)').addClass('active')
    $('.tabcontent').hide(); $('#arch1').show()
  }
  if (window.location.href.indexOf('3d-architectural-rendering-services') > -1) {
    $('.tablaps1 .tab .tablinks').removeClass('active')
    $('.tablaps1 .tab .tablinks:nth-child(2)').addClass('active')
    $('.tabcontent').hide(); $('#arch2').show()
  }
  if (window.location.href.indexOf('3d-architectural-interior-rendering') > -1) {
    $('.tablaps1 .tab .tablinks').removeClass('active')
    $('.tablaps1 .tab .tablinks:nth-child(3)').addClass('active')
    $('.tabcontent').hide(); $('#arch3').show()
  }
  if (window.location.href.indexOf('3d-architectural-exterior-rendering') > -1) {
    $('.tablaps1 .tab .tablinks').removeClass('active')
    $('.tablaps1 .tab .tablinks:nth-child(4)').addClass('active')
    $('.tabcontent').hide(); $('#arch4').show()
  }
  if (window.location.href.indexOf('3d-walkthrough-animation-services') > -1) {
    $('.tablaps1 .tab .tablinks').removeClass('active')
    $('.tablaps1 .tab .tablinks:nth-child(5)').addClass('active')
    $('.tabcontent').hide(); $('#arch5').show()
  }
  if (window.location.href.indexOf('architecture-video-presentation') > -1) {
    $('.tablaps1 .tab .tablinks').removeClass('active')
    $('.tablaps1 .tab .tablinks:nth-child(6)').addClass('active')
    $('.tabcontent').hide(); $('#arch6').show()
  }
  if (window.location.href.indexOf('360-panoramic-vr-video') > -1) {
    $('.tablaps1 .tab .tablinks').removeClass('active')
    $('.tablaps1 .tab .tablinks:nth-child(7)').addClass('active')
    $('.tabcontent').hide(); $('#arch7').show()
  }
  if (window.location.href.indexOf('3d-product-modeling') > -1) {
    $('.tablaps1 .tab .tablinks').removeClass('active')
    $('.tablaps1 .tab .tablinks:nth-child(8)').addClass('active')
    $('.tabcontent').hide(); $('#arch8').show()
  }
  if (window.location.href.indexOf('facade-design') > -1) {
    $('.tablaps1 .tab .tablinks').removeClass('active')
    $('.tablaps1 .tab .tablinks:nth-child(9)').addClass('active')
    $('.tabcontent').hide(); $('#arch9').show()
  }
  if (window.location.href.indexOf('scale-modeling') > -1) {
    $('.tablaps1 .tab .tablinks').removeClass('active')
    $('.tablaps1 .tab .tablinks:nth-child(10)').addClass('active')
    $('.tabcontent').hide(); $('#arch10').show()
  }
  if (window.location.href.indexOf('logo-designing') > -1) {
    $('#bran').click()
    $('.tablaps2 .tab .tablinks').removeClass('active')
    $('.tablaps2 .tab .tablinks:nth-child(1)').addClass('active')
    $('.tabcontent').hide(); $('#bran1').show()
  }
  if (window.location.href.indexOf('brochure-designing') > -1) {
    $('#bran').click()
    $('.tablaps2 .tab .tablinks').removeClass('active')
    $('.tablaps2 .tab .tablinks:nth-child(2)').addClass('active')
    $('.tabcontent').hide(); $('#bran2').show()
  }
  if (window.location.href.indexOf('stall-designing') > -1) {
    $('#bran').click()
    $('.tablaps2 .tab .tablinks').removeClass('active')
    $('.tablaps2 .tab .tablinks:nth-child(3)').addClass('active')
    $('.tabcontent').hide(); $('#bran3').show()
  }
  if (window.location.href.indexOf('stationery-designing') > -1) {
    $('#bran').click()
    $('.tablaps2 .tab .tablinks').removeClass('active')
    $('.tablaps2 .tab .tablinks:nth-child(4)').addClass('active')
    $('.tabcontent').hide(); $('#bran4').show()
  }
  if (window.location.href.indexOf('photography') > -1) {
    $('#bran').click()
    $('.tablaps2 .tab .tablinks').removeClass('active')
    $('.tablaps2 .tab .tablinks:nth-child(5)').addClass('active')
    $('.tabcontent').hide(); $('#bran5').show()
  }
  if (window.location.href.indexOf('product-presentation') > -1) {
    $('#bran').click()
    $('.tablaps2 .tab .tablinks').removeClass('active')
    $('.tablaps2 .tab .tablinks:nth-child(6)').addClass('active')
    $('.tabcontent').hide(); $('#bran6').show()
  }
  if (window.location.href.indexOf('web-designing') > -1) {
    $('#web').click()
    $('.tablaps3 .tab .tablinks').removeClass('active')
    $('.tablaps3 .tab .tablinks:nth-child(1)').addClass('active')
    $('.tabcontent').hide(); $('#web1').show()
  }
  if (window.location.href.indexOf('website-development') > -1) {
    $('#web').click()
    $('.tablaps3 .tab .tablinks').removeClass('active')
    $('.tablaps3 .tab .tablinks:nth-child(2)').addClass('active')
    $('.tabcontent').hide(); $('#web2').show()
  }
  if (window.location.href.indexOf('mobile-application-development') > -1) {
    $('#web').click()
    $('.tablaps3 .tab .tablinks').removeClass('active')
    $('.tablaps3 .tab .tablinks:nth-child(3)').addClass('active')
    $('.tabcontent').hide(); $('#web3').show()
  }
  if (window.location.href.indexOf('digital-marketing-services') > -1) {
    $('#web').click()
    $('.tablaps3 .tab .tablinks').removeClass('active')
    $('.tablaps3 .tab .tablinks:nth-child(4)').addClass('active')
    $('.tabcontent').hide(); $('#web4').show()
  }
  if (window.location.href.indexOf('search-engine-optimization') > -1) {
    $('#web').click()
    $('.tablaps3 .tab .tablinks').removeClass('active')
    $('.tablaps3 .tab .tablinks:nth-child(5)').addClass('active')
    $('.tabcontent').hide(); $('#web5').show()
  }
  if (window.location.href.indexOf('social-media-marketing') > -1) {
    $('#web').click()
    $('.tablaps3 .tab .tablinks').removeClass('active')
    $('.tablaps3 .tab .tablinks:nth-child(6)').addClass('active')
    $('.tabcontent').hide(); $('#web6').show()
  }
})

function arch1 () {
  location.href = 'http://tripolystudio.com/3d-architectural-visualization/'
}
function arch2 () {
  location.href = 'http://tripolystudio.com/3d-architectural-rendering-services/'
}
function arch3 () {
  location.href = 'http://tripolystudio.com/3d-architectural-interior-rendering/'
}
function arch4 () {
  location.href = 'http://tripolystudio.com/3d-architectural-exterior-rendering/'
}
function arch5 () {
  location.href = 'http://tripolystudio.com/3d-walkthrough-animation-services/'
}
function arch6 () {
  location.href = 'http://tripolystudio.com/architecture-video-presentation/'
}
function arch7 () {
  location.href = 'http://tripolystudio.com/360-panoramic-vr-video/'
}
function arch8 () {
  location.href = 'http://tripolystudio.com/3d-product-modeling/'
}
function arch9 () {
  location.href = 'http://tripolystudio.com/facade-design/'
}
function arch10 () {
  location.href = 'http://tripolystudio.com/scale-modeling/'
}
function bran1 () {
  location.href = 'http://tripolystudio.com/logo-designing/'
}
function bran2 () {
  location.href = 'http://tripolystudio.com/brochure-designing/'
}
function bran3 () {
  location.href = 'http://tripolystudio.com/stall-designing/'
}
function bran4 () {
  location.href = 'http://tripolystudio.com/stationery-designing/'
}
function bran5 () {
  location.href = 'http://tripolystudio.com/photography/'
}
function bran6 () {
  location.href = 'http://tripolystudio.com/product-presentation/'
}
function web1 () {
  location.href = 'http://tripolystudio.com/web-designing/'
}
function web2 () {
  location.href = 'http://tripolystudio.com/website-development/'
}
function web3 () {
  location.href = 'http://tripolystudio.com/mobile-application-development/'
}
function web4 () {
  location.href = 'http://tripolystudio.com/digital-marketing-services/'
}
function web5 () {
  location.href = 'http://tripolystudio.com/search-engine-optimization/'
}
function web6 () {
  location.href = 'http://tripolystudio.com/social-media-marketing/'
}
// Get the element with id="defaultOpen" and click on it
/*
window.onload = function () {
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault()
	  alert('Copyrights 7 Square Architectural Studio')
  }, false)
  document.addEventListener('keydown', function (e) {
    // document.onkeydown = function(e) {
    // "I" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      disabledEvent(e)
      alert('Copyrights 7 Square Architectural Studio')
    }
    // 'C' key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
      disabledEvent(e)
      alert('Copyrights 7 Square Architectural Studio')
    }
    // "J" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      disabledEvent(e)
      alert('Copyrights 7 Square Architectural Studio')
    }
    // "S" key + macOS
    if (e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
      disabledEvent(e)
      alert('Copyrights 7 Square Architectural Studio')
    }
    // "U" key
    if (e.ctrlKey && e.keyCode == 85) {
      disabledEvent(e)
      alert('Copyrights 7 Square Architectural Studio')
    }
    // "F12" key
    if (event.keyCode == 123) {
      disabledEvent(e)
      alert('Copyrights 7 Square Architectural Studio')
    }
  }, false)

  function disabledEvent (e) {
    if (e.stopPropagation) {
      e.stopPropagation()
    } else if (window.event) {
      window.event.cancelBubble = true
    }
    e.preventDefault()
    return false
  }
}
*/
