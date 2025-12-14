function Validator(options) {
    //hàm thực hiện validate
    function Validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage = rule.test(inputElement.value)
        if (errorMessage) {
            errorElement.innerText = errorMessage
                inputElement.parentElement.classList.add('invalid')
            } else {
                errorElement.innerText = "" 
                inputElement.parentElement.classList.remove('invalid')
            }
    }

    //lấy element của form
    var formElement = document.querySelector(options.form)

    if (formElement) {
        options.rules.forEach(rule => {
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                //xử lý blur khỏi input
                inputElement.onblur = () => {
                    Validate(inputElement, rule)
                }

                //xử lý khi người dùng nhập vào input
                inputElement.oninput = () => {
                    var errorElement = inputElement.parentElement.querySelector('.form-message')
                    errorElement.innerText = "" 
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        });
        
    }
}

// định nghĩa rules
//nguyên tắc rule:
// 1. khi có lỗi => message error
// 2. khi ko có lỗi => undefined
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? undefined : 'vui lòng nhập đủ trường này'
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: (value) => {
            var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            return regex.test(value) ? undefined : "trường này phải là email"
        }
    }
}

Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: (value) => {
            return value.lenght >= min ? undefined : `vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}