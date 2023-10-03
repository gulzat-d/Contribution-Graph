function createCalendar() {
  const graphCalendar = document.querySelector('.graphCalendar');
  for(let i=357; i>0; i--){
    const day = document.createElement("span");
    day.classList.add("square");
    day.setAttribute("id", i);
    graphCalendar.append(day);
  }
};

function daysArr() {
  const startDay = new Date();
  const daysArr = [];
  for(let i = 1; i<=357; i++) {
    let element = new Date(startDay-(1000*60*60*24*i));
    let month = element.getMonth()+1;
    if (month<10) {
      month = '0'+month;
    }
    let currentDay = `${element.getFullYear()}-${month}-${element.getDate()}`
    daysArr.push(currentDay);
  }
  return daysArr;
}
 
// function months() {
//   const currentMonth = new Date().getMonth();
//   console.log(currentMonth);
//   const monthsArr = ['Янв', 'Февр', 'Март', "Апр.", 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'];
//   document.querySelector(`.month${currentMonth}`).innerHTML = currentMonth;
//   for (let i=0; i<=11; i++) {
//     document.querySelector(`.month${i}`).innerHTML = monthsArr[i];
//   }
// }


async function getPromise() {
  const res = await fetch('https://dpg.gg/test/calendar.json');
  const res2 = res.json();
  res2.then(data => {
    const daysFromPromise = Object.entries(data);
    const calendar = createCalendar();
    const days = daysArr();
    for (let i = 0; i <= days.length; i++) {
      const element = days[i];
      let element2 = daysFromPromise.find(item=>item[0] == element);
      if (element2) { 
        if (element2[1]) {
          let element3 = element2[1];
          let elementId = document.getElementById(i)
                  if (element3>=30) {
            elementId.classList.add("graphFooter_square-5");
          } else if (element3>=20) {
            elementId.classList.add("graphFooter_square-4");
          }  else if (element3>=10) {
            elementId.classList.add("graphFooter_square-3");
          }  else if (element3>=1) {
            elementId.classList.add("graphFooter_square-2");
          }
        }
      }
      
      if (element == element2) {

      }
    }
  })
  months()
};

getPromise();
