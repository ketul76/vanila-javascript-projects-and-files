let data = [
  {
    name: 'ketul',
    age: 25,
  },
  {
    name: 'manan',
    age: 20,
  },
  {
    name: 'jenish',
    age: 10,
  },
  {
    name: 'om',
    age: 12,
  },
  {
    name: 'dan',
    age: 22,
  },
  {
    name: 'deep',
    age: 24,
  },
];

const info = document.querySelector('#info');
let details = data.map(function(e){

  return  '<div>'+  e.name + " is " + e.age + ' years old' + '</div>';
   
});
info.innerHTML = details.join('\n');
