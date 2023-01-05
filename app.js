const App = {
 data()
 {
    return {
       placeholderString: 'Введите название заметки',
       title: 'Список заметок',
       inputValue:'',
        notes: ['Заметка 1']
        }
 },
 methods: {
  inputChangeHandler(event) {
     this.inputValue = event.target.value
  },
     addNewNote() {
      if (this.inputValue !== '') {
          this.notes.push(this.inputValue)
          this.inputValue = ''
      }
     },
     toUpperCase(item)
     {
         return item.toUpperCase()
     },
     removeNote(index)
     {
         this.notes.splice(index, 1)
     }
}
}

const app = Vue.createApp(App)

app.mount('#app')












