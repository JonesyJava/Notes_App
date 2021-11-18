
const notesEl = document.querySelector(".note")
const editBtn = document.querySelector(".edit")
const deleteBtn = document.querySelector(".delete")
const bestEl = notesEl.querySelector(".best")
const textArea = notesEl.querySelector("textarea")

class NotesService{

  hiddenBtn(){
    editBtn.addEventListener('click', () => {
      bestEl.classList.toggle('hidden')
      textArea.classList.toggle('hidden')
    })

  }

}

export const notesService = new NotesService()
