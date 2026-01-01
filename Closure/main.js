function createCounter() {
  let counter = 0 //counter được tạo trong phạm vi hàm createCounter

  function increase() { //cái này cũng thế
    return ++counter  //truy cập được biến ở bên ngoài phạm vi của nó(vì bên trong phạm vi của nó ko có nên nó nhảy ra ngoài nó tìm)
  }

  return increase 
}

const counter1 = createCounter() //nhưng lại gán hàm increase vào biến global là counter1

console.log(counter1())  //hàm nó nhớ nơi nó được tạo ra là ở trong phạm vi của hàm createCounter nên nó có thể sử dụng biến counter 
console.log(counter1())
console.log(counter1())


const counter2 = createCounter() //một môi trường mới được tạo ra => chạy lại từ đầu

console.log(counter2())
console.log(counter2())
console.log(counter2())

//VD log

function createLogger(namespace) {
  function logger(message) {
    console.log(`[${namespace}] ${message}`)
  }

  return logger
}
// ============= APP =============
// register.js

const infoLogger = createLogger('info')
infoLogger('bắt đầu gửi mail')
infoLogger('gửi mail lỗi lần 1, thử gửi lại...')
infoLogger('gửi mail thành công cho user xxx')

//forgotPassword.js
const errorLogger = createLogger('Error')
errorLogger('Email ko tồn tại trong DB')
errorLogger('gửi mail lỗi lần 1, thử gửi lại...')
errorLogger('gửi mail thành công cho user xxx')

//VD localstorage

function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {}

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store))
  }

  const storage = {
    get(key) {
      return store[key]
    },
    set(key, value) {
      store[key] = value
      save()
    },
    delete(key) {
      delete store[key]
      save()
    }
  }

  return storage
}

//profileSetting.js

const profileSetting = createStorage('profile')
profileSetting.set('alo', 'day em iu')
profileSetting.set('name', 'PTB')
profileSetting.set('address', 'Da Lat')
console.log(profileSetting.get('alo'));

const profileSetting2 = createStorage('profile2')
profileSetting2.set('alo', 'lo **')
profileSetting2.set('name', 'PTB2')
profileSetting2.set('address', 'Da Lat, VN')
console.log(profileSetting2.get('alo'));

//VD private

function createApp() {
  let cars = [] //private

  return {
    add(car) {
      cars.push(car)
    },
    show(car) {
      console.log(cars);
    }
  }
}

const app = createApp()
app.add('BMW')
app.add('Porsche')
app.add('Honda')
app.show()