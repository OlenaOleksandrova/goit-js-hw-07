const loginNew = document.querySelector('.login-form').addEventListener('submit', (event) => {
    event.preventDefault();


    const { email, password } = event.target.elements;

    const emailEl = email.value.trim();
    const passwordEl = password.value.trim();
    if (emailEl === `` || passwordEl === ``) {
        alert('All form fields must be filled in');
        return;
}
const formData = {
    email: emailEl,
    password: passwordEl,
};
console.log(formData);
// loginNew.reset();
});
