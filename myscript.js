async function bookSearch(){
  const search = await document.getElementById('search').value
  document.getElementById('results').innerHTML = "";

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",
    success: function(data){
      for(i = 0; i < data.items.length; i++){
        results.innerHTML += `<img id=image src=${data.items[i].volumeInfo.imageLinks.smallThumbnail}/>`
        results.innerHTML += `<h3 id=text>${data.items[i].volumeInfo.title}</h3>`
        results.innerHTML += `<h4 id=text>${data.items[i].volumeInfo.authors}</h4>`
        results.innerHTML += `<h5 id=text>Published by ${data.items[i].volumeInfo.publisher}</h5>`
        results.innerHTML += `<p id=text>${data.items[i].volumeInfo.description}</p>`
        results.innerHTML += `<a href=${data.items[i].volumeInfo.infoLink} id=text>Read more...<br></a>`
      }
    },
    type: 'GET'
  });
}
document.getElementById('submit').addEventListener('click', bookSearch, false);
