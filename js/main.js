'use strict';

// creating a modal window for booking item
let btnBooked = document.getElementById('btn-booked');
let btnBookedClose = document.getElementById('btn-close');
let modalWindow = document.getElementById('modal');

let modalOpen = () => {
    modalWindow.style.display = 'block';
    document.getElementById('bg-overlay').style.display = 'block';
};
let modalClose = () => {
    modalWindow.style.display = 'none';
    document.getElementById('bg-overlay').style.display = 'none';
};

btnBooked.onclick = modalOpen;
btnBookedClose.onclick = modalClose;

let btnMenuOpen = document.getElementById('btn-menu-open');
let btnMenuClose = document.getElementById('btn-menu-close');
let mobileMenuWind = document.getElementById('mobile-menu');

const menuMobileOpen = () => {
    mobileMenuWind.style.display = 'block';
}
const menuMobileClose = () => {
    mobileMenuWind.style.display = 'none';
}

btnMenuOpen.onclick = menuMobileOpen;
btnMenuClose.onclick = menuMobileClose;

let visitorName = document.getElementById('name');
//sending user-form
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);
    
    async function formSend(e) {
        e.preventDefault(); //запрет стандартной отправки формы
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('image', formImage.files[0]);
        if (error === 0) {
            fetch("/", {
                method: "POST",
                // headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
            .then(() => {
                formPreview.innerHTML = '';
                modalClose();
                alert(`Благодарим за заявку, ${visitorName.value}! Мы скоро с Вами свяжемся;)`);
                form.reset();
            })
        } else {
            alert('Пожалуйста заполните все поля!')
        }
    }
    function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('.req');//check-form

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

            if (input.classList.contains('visitor-email')) {
                if (emailTest(input)) {
                    formAddError(input); //если тест не пройден приписываем ошибку полю
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') { //проверка заполнено ли поле вообще
                    formAddError(input);
                    error++;
                }
            }
		}
		return error;
	}
	function formAddError(input) { //добавляют класс ошибки объекту и родительскому объекту
		input.parentElement.classList.add('error');
		input.classList.add('error');
	}
	function formRemoveError(input) { //убирают класс ошибки объекту и родительскому объекту
		input.parentElement.classList.remove('error');
		input.classList.remove('error');
	}
	function emailTest(input) { //проверка соответствия емейл
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    // Downloading images
    const formImage = document.getElementById('formImage');
    const formPreview = document.getElementById('formPreview');
    
    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    });
    
    function uploadFile(file) {
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert("Разрешены только изображения.");
            formImage.value = '';
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert('Файл должен быть менее 2МБ');
            return;
        }

        let reader = new FileReader();
        reader.onload = function (e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Photo" />`;
        };

        reader.onerror = function (e) {
            alert('Error');
        };
        reader.readAsDataURL(file);
    }
    
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => {
    //     modalClose();
    //   })
    //     .catch((error) => console.log('Sending form failed'));
})