/* numbers */

document.getElementById('one').addEventListener('click', function(){
    document.getElementById('output').value += '1';
  })
  
  document.getElementById('two').addEventListener('click', function(){
    document.getElementById('output').value += '2';
  })
  
  document.getElementById('three').addEventListener('click', function(){
    document.getElementById('output').value += '3';
  })
  
  document.getElementById('four').addEventListener('click', function(){
    document.getElementById('output').value += '4';
  })
  
  document.getElementById('five').addEventListener('click', function(){
    document.getElementById('output').value += '5';
  })
  
  document.getElementById('six').addEventListener('click', function(){
    document.getElementById('output').value += '6';
  })
  
  document.getElementById('seven').addEventListener('click', function(){
    document.getElementById('output').value += '7';
  })
  
  document.getElementById('eight').addEventListener('click', function(){
    document.getElementById('output').value += '8';
  })
  
  document.getElementById('nine').addEventListener('click', function(){
    document.getElementById('output').value += '9';
  })
  
  document.getElementById('zero').addEventListener('click', function(){
    document.getElementById('output').value += '0';
  })
  
  /* arithmetic signs */
  
  document.getElementById('plus').addEventListener('click', function(){
    document.getElementById('output').value += ' + ';
  })
  
  document.getElementById('minus').addEventListener('click', function(){
    document.getElementById('output').value += ' - ';
  })
  
  document.getElementById('multiple').addEventListener('click', function(){
    document.getElementById('output').value += ' * ';
  })
  
  document.getElementById('divide').addEventListener('click', function(){
    document.getElementById('output').value += ' / ';
  })
  
  document.getElementById('percent').addEventListener('click', function(){
    document.getElementById('output').value += ' % ';
  })
  
  document.getElementById('dot').addEventListener('click', function(){
    document.getElementById('output').value += '.';
  })
  
  document.getElementById('del').addEventListener('click', function(){
    document.getElementById('output').value = '';
  })
  
  /* result */
  
  document.getElementById('equal').addEventListener('click', function(){
    document.getElementById('output').value = eval(document.getElementById('output').value);
  })
  