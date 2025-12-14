function Validator(options) {
    function Validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector('.form-message')
        var errorMessage = rule.test(inputElement.value)
        if (errorMessage) {
            errorElement.innerText = errorMessage
                inputElement.parentElement.classList.add('invalid')
            } else {
                errorElement.innerText = "" 
                inputElement.parentElement.classList.remove('invalid')
            }
    }

    var formElement = document.querySelector(options.form)

    if (formElement) {
        options.rules.forEach(rule => {
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = () => {
                    Validate(inputElement, rule)
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
        test: () => {
            
        }
    }
}