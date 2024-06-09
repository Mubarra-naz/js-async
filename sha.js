function start(){
  console.log('start programme ')
}
function  makemeal(){
  console.log('start makemeal')
  setTimeout(()=>{
    console.log('Makig meal is done')
    makeTea()
  },3000)

}
function  makeTea(){
  console.log('start making tea')
  setTimeout(()=>{
    console.log('Makig tea is done')
    washingCloth()
  },5000)

}
function  washingCloth(){
  console.log('start washing clothes ')
  setTimeout(()=>{
    console.log('washing clothes is done')
    watchingTut()
  },3000)

}
function  watchingTut(){
  console.log('start watching tutorials')
  setTimeout(()=>{
    console.log('watched tutorials')
    takeNab()
  },1000)

}
function  takeNab(){
  console.log('start nab')
  setTimeout(()=>{
    console.log('nab is done')
    endProgram()
  },5000)

}
function endProgram(){
  console.log('end Programme ')

}
start()
makemeal()
