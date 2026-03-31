var modules = {
    formula: true,
    toolbar: [
      [{ header: [1, 2, false] }],
      [
        'bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
      ['formula',]
    ]
  }
  
  var formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'formula'
  ]
  document.addEventListener('DOMContentLoaded', function() {
    var quill = new Quill('#editor', {
      theme: 'snow',
      modules, formats
    });
  console.log(window.katex)
    
  }, false);