
  const bgcolorPicker = document.getElementById('bgcolorPicker');

  bgcolorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.documentElement.style.setProperty('--bg-color', selectedColor);
  });


  const secondbgcolorPicker = document.getElementById('secondbgcolorPicker');

  secondbgcolorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.documentElement.style.setProperty('--second-bg-color', selectedColor);
  });

  const textcolorPicker = document.getElementById('textcolorPicker');

  textcolorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.documentElement.style.setProperty('--text-color', selectedColor);
  });

  const maincolorPicker = document.getElementById('maincolorPicker');

  maincolorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.documentElement.style.setProperty('--main-color', selectedColor);
  });



  