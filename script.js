const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')
button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  // var data = new Date()
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  // var mes = String(data.getMonth() + 1).padStart(2, '0')
  // const dataAtual = today + '/' + mes

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia já incluso 🔴')
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}
// const data = {
//   run: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06'],
//   takePills: ['01-03'],
//   journal: ['01-02']
// }
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} //primeira vez executada nao existe nada por isso é colocado um objeto vazio como scape.
nlwSetup.setData(data)
nlwSetup.load()
