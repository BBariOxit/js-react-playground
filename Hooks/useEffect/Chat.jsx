const { useEffect, useState } = React

const lessons = [
  {
      "id": 1,
      "name": "HTML-CSS"
    },
    {
      "id": 2,
      "name": "javascript"
    },
    {
      "id": 3,
      "name": "Responsive Với Grid System"
    },
    {
      "id": 4,
      "name": "Xây Dựng Website với ReactJS"
    }
]
function Chat() {
  const [lessonId, setLessonId] = useState(1)
  return (
    <div>
      <ul>
        {lessons.map((lesson) => {
          return <li
            key={lesson.id}
            style={{color: lessonId === lesson.id ? 'red' : '#333'}}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        })}
      </ul>
    </div>
  )
}