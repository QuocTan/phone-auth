var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

function auth() {

    var number = '+84' + document.querySelector('input').value;

    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
        console.log('Gởi mã thành công');


        var
            code = prompt('nhập số xác minh của bạn', '');


        if (code === null) return;


        e.confirm(code).then(function (result) {
            console.log('Xác thực thành công', result.user);

            document.querySelector('label').textContent += 'DONE ' + result.user.phoneNumber;

        }).catch(function (error) {
            console.error('Lỗi xác thực', error);

        });

    })
        .catch(function (error) {
            console.error('Gởi mã không thành công', error);

        });

}