var dfm = document.createDocumentFragment();
document.getElementById('btnAgregar').addEventListener('click',function(e){
  var autor = document.getElementById('textAutor').value;
  var contentPost = document.getElementById('contentPost').value;
  var titlePost = document.createElement('h6');
  titlePost.textContent = "Autor : "+autor;
  var newPost = document.createElement('p');
  newPost.setAttribute('class','post classMargin');
  newPost.textContent = contentPost;
  newPost.prepend(titlePost);
  if(contentPost !== ''){
    dfm.appendChild(newPost);
    document.getElementById('post').prepend(dfm);
    document.getElementById('textAutor').value = "";
    document.getElementById('contentPost').value = "";
  }else {
    alert('Ingrese Contenido');
  }
});
