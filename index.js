
document.querySelector('form').addEventListener('submit', (e) =>
{
    const pwd1 = document.getElementById('password1');
    const pwd2 = document.getElementById('password2');
    const errMsg = document.getElementById('err-msg');
    const label1 = document.getElementById('lbl-pwd1');

    if(pwd1.value !== pwd2.value)
    {
        e.preventDefault();
        pwd1.classList.add('match-error');
        pwd2.classList.add('match-error');
        errMsg.style.display = 'block';

        return false;
    }
    return true;
});