
$(document).ready(function() {
  $("#submit").keypress(function (touchMouseKey) {
    if ((touchMouseKey.which && touchMouseKey.which == 13) || (touchMouseKey.keyCode && touchMouseKey.keyCode == 13)) {
      $('button[type=submit].default').click();
      return false;
    } else {
      return true;
    }
  });
});

async function bookSearch() {
  const search = await document.getElementById('search').value
  document.getElementById('results').innerHTML = "";

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",
    success: function(data) {
      for(i = 0; i < data.items.length; i++) {
        results.innerHTML += `<img class="flex" id="box-image" src=${data.items[i].volumeInfo.imageLinks.smallThumbnail}/>`
        results.innerHTML += `<h3 class="flex-text" id="box-text1">${data.items[i].volumeInfo.title}</h3>`
        results.innerHTML += `<h4 class="flex-text" id="box-text2">${data.items[i].volumeInfo.authors}</h4>`
        results.innerHTML += `<h5 class="flex-text" id="box-text3">Published by { ${data.items[i].volumeInfo.publisher} }</h5>`
        results.innerHTML += `<p class="flex-text" id="box-text4">${data.items[i].volumeInfo.description}</p>`
        results.innerHTML += `<a href=${data.items[i].volumeInfo.infoLink} class="flex-text" id="box-text5">Read more...</a>`

      }
    },
    type: 'GET'
  });
}
document.getElementById('submit').addEventListener('click', bookSearch, false);
