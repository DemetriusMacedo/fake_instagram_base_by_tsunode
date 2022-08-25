// const userStrong = document.querySelector('div.avatar-content');
// const strong = document.createElement('strong');

// const newHTML = userStrong.innerHTML.replaceAll('div', 'strong')
// userStrong.innerHTML = newHTML;


const userStrong = document.querySelector('div.avatar-content div');
const strong = document.createElement('strong');

strong.innerHTML = 'Nome Usuário';

userStrong.replaceWith(strong);

// const fistName = document
// .querySelector('form.form-auth.card input[name = "name"')
// .placeholder = 'Digite seu primeiro nome';

 const firstNameNew = document.getElementsByName('name')[0].placeholder = 'Digite seu primeiro nome';