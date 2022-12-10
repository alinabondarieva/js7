// Опишіть своїми словами як працює метод forEach.
// пріймає в себе callback функцію з трьома можливими параметрами етеруємо його індекс та початковий аррей+ виконує певні написані дії для кожного з масиву та нічого не повертає
// Як очистити масив?
// можна очистити масив через split(0, arrray.length)
// також можна відтворити через array.length = 0
//класс Array с методом Resize
// Як можна перевірити, що та чи інша змінна є масивом?
// перевірити масив можна через Array.isArray() 


// Завдання
// Реалізувати функцію фільтру масиву за вказаним типом даних. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

// Технічні вимоги:
// Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
// Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. 
// Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].

const mass = ['hello', 'world', 23, '23', null, [1, 2, 3]]
console.log( Array.isArray(mass))
const type = 'string'
function filterBy(mass, type){
 return mass.filter(item => typeof item !== type) 
}
console.log(filterBy(mass, type))

// function filterBy(mass, type){
//  return mass.filter(item => {
//      if (item === null && type === "object"){
//          console.log(item)
//       if (typeof item !== type && item !== null){
//           console.log(item)
//         return item 
//       }
//       return item
//      } else if (typeof item !== type){
//        return item
//      }
//     }) 
// }
// console.log(filterBy(mass, type)) 