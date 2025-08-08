function sayHello() {
    console.log('Hellott')
  }
  setInterval(sayHello, 1000) 

  function sayHelloo() {
    console.log('Helloff')
  }

  sayHelloo()
  setTimeout(sayHello, 4000)