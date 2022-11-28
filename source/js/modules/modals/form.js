function inputFormTel() {
  const INPUT_TEL = document.querySelectorAll('input[type="tel"]');

  INPUT_TEL.forEach(function (item) {
    item.addEventListener('input', () => {
      const value = item.value.replace(/[^0-9\s)(+)-]/g, ''); // ограничивает ввод всех символов кроме указанных
      const numberLength = 100;

      let result = '';

      for (let i = 0; i < value.length && i < numberLength; i++) {
        result += value[i];
      }
      item.value = result;
    });
  });
}

function inputFormName() {
  const INPUT_NAME = document.querySelectorAll('input[type="text"]');

  INPUT_NAME.forEach(function (item) {
    item.removeAttribute('pattern');
    item.addEventListener('input', () => {
      const value = item.value.replace(/[^a-zA-ZА-Яа-яЁё'-\s]/gi, '');
      const nameLength = 100;

      let result = '';

      for (let i = 0; i < value.length && i < nameLength; i++) {
        result += value[i];
      }
      item.value = result;
    });
  });
}

export {inputFormTel, inputFormName};
