function shineLinks(id){
    try{
        var el=document.getElementById(id).getElementsByTagName('a');
        var url=document.location.href;
        for(var i=0;i<el.length; i++){
            if (url==el[i].href){
                el[i].className += ' act';
            };
        };
    }
    catch(e){}
};

       document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  const ratingValue = document.getElementById('ratingValue');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      let rating = star.getAttribute('data-value');
      console.log('Clicked star:', rating);

      ratingValue.textContent = `${rating}/5 stars`;
      console.log('Updated rating value:', ratingValue.textContent);

      stars.forEach(s => {
        s.classList.remove('selected');
        if (s.getAttribute('data-value') <= rating) {
          s.classList.add('selected');
          console.log('Added selected class to star:', s.getAttribute('data-value'));
        }
      });
    });
  });
});


// Функція для відкриття модального вікна
    function openModal() {
      document.getElementById('feedbackModal').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
    }

    // Функція для закриття модального вікна
    function closeModal() {
      document.getElementById('feedbackModal').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
    }

    function submitFeedback() {
      // Ваш код для додаткової логіки, якщо потрібно
      document.getElementById('feedbackModal').submit(); // Примусово відправити форму
  }
  
  

function removeItem(button) {
    // Знайти найближчий батьківський елемент з класом `.cart__item`
    const item = button.closest('.cart__item');
    if (item) {
        item.remove(); // Видалити елемент зі сторінки
    } else {
        console.log("Елемент для видалення не знайдено");
    }
}

function clearCart() {
    const cartContent = document.getElementById("cartContent"); // Отримує контейнер кошика
    const items = cartContent.getElementsByClassName("cart__item"); // Отримує всі елементи кошика

    // Перетворюємо HTMLCollection в масив, щоб видаляти елементи без проблем
    while (items.length > 0) {
        items[0].remove(); // Видаляє перший елемент зі списку
    }

    // Можна додатково вивести повідомлення в консоль для перевірки
    console.log("Кошик очищено");
}


function sendFeedback(event) {
  event.preventDefault();  // Запобігаємо стандартному відправленню форми
  
  const form = document.getElementById('feedbackModal');
  const formData = new FormData(form);

  // Виконуємо AJAX запит
  fetch('submit_feedback.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          // Закриваємо форму
          closeModal();
          // Виконуємо редирект на поточну сторінку
          window.location.reload(); // Це перезавантажить поточну сторінку
      } else {
          // Виводимо помилку, якщо щось пішло не так
          alert(data.message || 'Щось пішло не так. Спробуйте ще раз.');
      }
  })
  .catch(error => {
      alert('Помилка при відправці форми.');
  });
}

function closeModal() {
  document.getElementById('feedbackModal').style.display = 'none';
}


