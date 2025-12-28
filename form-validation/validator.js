function Validator(options) {
    
    function getParent(element, selector) {
        while(element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {}

    //hàm thực hiện validate
    function Validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage

        //lấy ra các rule của selector
        var rules = selectorRules[rule.selector]
        //lặp qua từng rule & kiểm tra
        for (var i =0; i < rules.length; i++) {
            switch(inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                errorMessage = rules[i](inputElement.value)
            }
            if(errorMessage) break
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
                getParent(inputElement, options.formGroupSelector).classList.add('invalid')
            } else {
                errorElement.innerText = "" 
                getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
            }

        return !errorMessage
    }

    //lấy element của form
    var formElement = document.querySelector(options.form)

    if (formElement) {
        //khi submit form
        formElement.onsubmit = (e) => {
            e.preventDefault()

            var isFormValid = true

            //lặp qua từng rule và validate
            options.rules.forEach(rule => {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = Validate(inputElement, rule)
                if(!isValid) {
                    isFormValid = false
                }
            })

            if (isFormValid){
                //trường hợp submit với js
                if (typeof options.onSubmit === 'function') {
                    var enableINputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableINputs).reduce(function(values, input){
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                                break
                            case 'checkbox':
                                if (!input.matches(':checked')) return values

                                if(!Array.isArray(values[input.name])) {
                                    values[input.name] = []
                                }
                                values[input.name].push()
                                break;
                            default:
                                values[input.name] = input.value
                        }
                        return values
                    }, {})

                    options.onSubmit(formValues)
                //trường hợp submit với hành vi mặc định
                } else {
                    formElement.submit()
                }
            }
        }

        //lặp qua mỗi rule và xử lý (lắng nghe sự kiện)
        options.rules.forEach(rule => {
            //lưu lại các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function(inputElement) {
                //xử lý blur khỏi input
                inputElement.onblur = () => {
                    Validate(inputElement, rule)
                }

                //xử lý khi người dùng nhập vào input
                inputElement.oninput = () => {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message')
                    errorElement.innerText = "" 
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            })
        });
    }
}

// định nghĩa rules
//nguyên tắc rule:
// 1. khi có lỗi => message error
// 2. khi ko có lỗi => undefined
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: (value) => {
            return value ? undefined : message || 'vui lòng nhập đủ trường này'
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: (value) => {
            var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            return regex.test(value) ? undefined : message || "trường này phải là email"
        }
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ? undefined : message || `vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : message || 'giá trị nhập vào không chính xác'
        }
    }
}