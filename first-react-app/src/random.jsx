function Random(){
  let number=Math.random()*100;

  return <h1>
    Your Number is {Math.round(number)}
  </h1>

}

export default Random;