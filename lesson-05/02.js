/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(galleryObj,name,amount) {
  if (galleryObj === gallery){
    if(name === 'Mona Lisa'){
      galleryObj["Mona Lisa"] = amount
    } else if(name === 'Starry Night'){
      galleryObj["Starry Night"] = amount
    } else if(name === 'The Scream'){
      galleryObj["The Scream"] = amount
    } else {
      galleryObj[name] = amount
    } 
  }else {
    console.log("вы не в галлерее")
  }
}
updateGallery(gallery, "Girl with a Pearl Earring", "Johannes Vermeer")
updateGallery(gallery,'Mona Lisa', "leonardo")
console.log(gallery)