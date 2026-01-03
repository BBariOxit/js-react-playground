let courseApi = 'http://localhost:3000/course'

function start() {
  getCourses(renderCourse)
  handleCreateForm()
}

start()

//function
function getCourses(callback) {
  fetch(courseApi)  
    .then((response) => response.json()) //trả về 1 promise
    .then(callback)
}

function createCourse(data, callback) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(courseApi, options)  //(url, {})
    .then((response) => {
      response.json()
    })
    .then(callback)
}

function handleDeleteCourse(id) {
  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(courseApi + '/' + id, options)  //(url, {})
    .then((response) => {
      response.json()
    })
    .then(() => {
      let course_id = document.querySelector('.course-id: ' + id)
      if(course_id){
        course_id.remove()
      }
    })
}

function renderCourse(courses) {
  let listCourseBlock = document.querySelector('.list-course')
  let htmls = courses.map((course) => {
    return `
      <li class="course-id: ${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick=handleDeleteCourse(${course.id})>Xóa</button>
      </li>
    `
  })
  listCourseBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
  let createBtn = document.querySelector('#create')

  createBtn.onclick = () => {
    let name = document.querySelector('input[name="Name"]').value
    let description = document.querySelector('input[name="Description"]').value
    
    let formData = {
      name: name,
      description: description
    }
    createCourse(formData, () => {
      getCourses(renderCourse)
    })
  }
} 