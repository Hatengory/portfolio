var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-two');
var modalCls = document.querySelector('.modal-close');
var modalBgOne = document.querySelector('.modal-one')

let buttonActive = () =>{
    modalBg.classList.remove('modal-passive');
    modalBgOne.classList.remove('modal-active');
}

let buttonDisactive = () =>{
    modalBg.classList.add('modal-passive');
    modalBgOne.classList.add('modal-active');
}

modalCls.addEventListener('click', buttonActive);
modalBtn.addEventListener('click', buttonDisactive);

let getDay = () => {

    var days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
      ];
      var d = new Date();
      var n = d.getDay();
      document.getElementById('day').innerHTML = `${days[n]}`;
    }

    getDay();