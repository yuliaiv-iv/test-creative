const allCheckboxes = document.querySelectorAll('.control__checkbox')
const checkboxesWrapper = document.querySelector('.control__list')
const checkboxMain = document.querySelector('.control__checkbox-main')
const headerButton = document.querySelector('.header__button')
const sidebar = document.querySelector('.sidebar')
const mainContent = document.querySelector('.content')
const closeButton = document.querySelector('.header__button-span')

// преобразование nodelist в массив для метода every
const checkboxList = Array.from(allCheckboxes);

// переключение стилей при нажатии на header button
function toggleActiveSidebar() {
  sidebar.classList.toggle('active')
  mainContent.classList.toggle('active')
  headerButton.classList.toggle('active')
  closeButton.classList.toggle('active')
}

// переключение состояния видимости/скрытия элемента 
function toggleSingleElementStatus() {
  checkboxList.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.previousElementSibling.style.visibility = 'hidden'
      checkbox.nextElementSibling.innerHTML = 'Показать изображение'
    } else {
      checkbox.previousElementSibling.style.visibility = 'visible'
      checkbox.nextElementSibling.innerHTML = 'Скрыть изображение'
    }
  })
}

// переключение состояния основной checkbox если состояние у всей группы checkboxes идентичное  
function toggleMainCheckboxStatus(arr) {
  const checkboxStatus = arr.every((checkbox) => {
    return checkbox.checked
  })
  checkboxStatus ? checkboxMain.checked = true : checkboxMain.checked = false
};

// управление одиним из элементов в группе checkboxes
function handleCheckboxClick() {
  toggleSingleElementStatus()
  toggleMainCheckboxStatus(checkboxList)
}

// управление основной checkbox
function toogleAllCheckboxes() {
  checkboxList.forEach((checkbox) => {
    checkbox.checked = this.checked
  })
  toggleSingleElementStatus()
}

checkboxMain.addEventListener('click', toogleAllCheckboxes)
checkboxesWrapper.addEventListener('click', handleCheckboxClick)
headerButton.addEventListener('click', toggleActiveSidebar)

///////////////////////////////////////////
// пунты 2

function moveElementRight(arr, steps) {
  console.log('входных данные', 'массив', arr, 'шаги', steps)

  for (let i = 0; i < steps; i++) {
      arr.unshift(arr.pop())
  }
   console.log('результат',arr)
}

moveElementRight([1, 2, 3, 4, 5], 3)


// пунты 3

const findCommon = (str1, str2) => {
  console.log('входных данные', 'строка 1 -', str1, 'строка 2 -', str2)
  let arr = []
  let subStr
  for (let i = 0; i < str1.length; i++) { 
    for (let j = i + 1; j <= str1.length; j++) {
      subStr = str1.slice(i, j);
        if (str2.indexOf(subStr) !== -1) {
          arr.push(subStr)
        }
    }
  }
  arr.sort((a, b) => {
    return b.length - a.length
  })
  console.log('результат', arr[0])
};

findCommon("aababba", "abbaabcd")