
import './TodoList.css'

import iconCheck from '../../aseets/images/icon-check.svg'
import iconCross from '../../aseets/images/icon-cross.svg'
import { useState } from 'react'

const tasks = [
  {
    checked: true,
    title: 'Complete online Javascript Course'
  },
  {
    checked: false,
    title: 'Jog around the park x3'
  },
  {
    checked: false,
    title: '10 minutes meditacion'
  },
  {
    checked: false,
    title: 'Read for 1 hour'
  },
  {
    checked: false,
    title: 'Pick up groceries'
  },
  {
    checked: false,
    title: 'Complete Todo App'
  }
]

const CheckBox = (props) => {
  const { idx, checked, onChecked } = props
  return (
    <div className="CheckBox">
      <label
        htmlFor={`cbox-${idx}`}
        className={`CheckBox-Label${checked? ' Checked': ''}`}
      >
        {checked && (<img src={iconCheck} />)}
      </label>
      <input
        id={`cbox-${idx}`}
        type="checkbox"
        className="CheckBox-Input"
        onChange={(e) => onChecked ? onChecked(e.target.checked) : ''} />
    </div>
  )
}

const TodoList = (props) => {
  const [taskState, setTaskState] = useState(tasks)
  const [status, setStatus] = useState(0)
  
  const onCheckedItem = (isChecked, index) => {
    let state = [...taskState]
    state[index].checked = isChecked
    setTaskState(state);
  }

  const removeTask = (index) => {
    let state = taskState.filter((_, tIdx) => tIdx !== index)
    setTaskState(state);
  }
  
  const clearConmpleted = () => {
    let state = taskState.filter((t) => !t.checked)
    setTaskState(state);
  }

  return (
    <section className="TodoList-body">
      <div className="TodoList-Input TodoList-Card">
        <div className="TodoList-Card-Content">
          <CheckBox idx={'input'} />
          <input type="text" className="TodoListInput" placeholder="What do you do today?"/>
        </div>
      </div>

      <div className="TodoList-Card">
        {taskState && taskState.filter(t => {
          return (
            status === 0
            || (status < 0 && !t.checked)
            || (status > 0 && t.checked)
          )
        }).map((t, idx) => (
          <div key={idx} className="TodoList-Item TodoList-Card-Content">
            <CheckBox checked={t.checked} idx={idx} onChecked={e => onCheckedItem(e, idx)} />
            <span className={`TaskTitle ${t.checked ? 'tashed' : ''}`}>{t.title}</span>
            <button className="BtnIcon" type="button" onClick={() => removeTask(idx)}>
              <img src={iconCross} width="12" />
            </button>
          </div>
        ))}

        <div className="TodoList-Footer">
          <div className="TodoList-Card-Content TodoList-Footer-Content">
            <div className="">{taskState.filter((t) => !t.checked).length} items left</div>
            <div className="">
              <ul className="TodoList-Filter">
                <li><a href="#" className="Link" onClick={() => setStatus(0)}>All</a></li>
                <li><a href="#" className="Link" onClick={() => setStatus(-1)}>Active</a></li>
                <li><a href="#" className="Link" onClick={() => setStatus(1)}>Completed</a></li>
              </ul>
            </div>
            <div className="">
              <a href="#" className="Link" onClick={() => clearConmpleted()}>Clear completed</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodoList;