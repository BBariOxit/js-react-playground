// import { createStore } from 'https://cdn.skypack.dev/redux'

//thời này người ta xài redux toolkit hết r, học cái này để chắc nền tảng của redux, => nếu code dự án thì vẫn phải xài redux toolkit

//phần tự code lại ứng dụng redux
//==================== MY REDUX ==================
function createStore(reducer) {
  let state = reducer(undefined, {})
  const subscribers = []

  return {
    getState() {
      return state
    },
    dispatch(action) {
      state = reducer(state, action)
      subscribers.forEach(subscriber => subscriber())
    },
    subscribe(subscriber) {
      subscribers.push(subscriber)
    }
  }
}

//===================== MY-APP ====================
const initState = 10
//reducer
function bankReducer(state = initState, action) {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload
    case 'WITHDRAW':
      return state - action.payload
    default:
      return state
  }
}

// store
const store = window.store = createStore(bankReducer)
// console.log(store.getState()) //getState() để lấy cái state hiện tại

//Actions

function deposit(payload) {
  return {
    type: 'DEPOSIT',
    payload
  }
}

function withdraw(payload) {
  return {
    type: 'WITHDRAW',
    payload
  }
}

const depositBtn = document.querySelector('#deposit')
const withdrawBtn = document.querySelector('#withdraw')

depositBtn.onclick = () => {
  store.dispatch(deposit(10))
}

withdrawBtn.onclick = () => {
  store.dispatch(withdraw(10))
}

//listener
store.subscribe(() => {
  render()
  console.log('haha')
})

//render
function render() {
  const output = document.querySelector('#output')
  output.innerText = store.getState()
}
render()