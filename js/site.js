let form_1 = document.getElementById('form');

form_1.addEventListener("submit", function (event) {
  event.preventDefault();
new FormData(form_1);
});

form_1.addEventListener("formdata", event => {
    const data = event.formData;
    const values = [...data.values()];
    console.log(values);
    if(values[1].length==0 && values[0].length==0){
      Swal.fire('Введите данные!','Проверьте введенные данные','error');
      return;
    }
    if(values[1].length==0){
        Swal.fire('Введите номер телефона!','Проверьте введенные данные','error');
        return;
    }
    if (values[0].length==0) {
        Swal.fire('Введите имя и фамилию', 'Проверьте введенные данные', 'error');
        return;
    }
    if (values[1].length < 6) {
        Swal.fire('Номер слишком короткий!', '', 'warning');
        return;
    }
    Swal.fire('Поздравляем!', 'Вы успешно прошли регистрацию!', 'success');
});
