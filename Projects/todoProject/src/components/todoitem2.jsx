function Todoitem2(){

  let todoName='Buy Eggs';
  let todoDate='5/10/24';
return <div class="container text-center">

    
<div class="row">
  <div class="col-6 ">{todoName}</div>
  <div class="col-4">{todoDate}</div>
  <div class="col-2"><button type="button" class="btn btn-danger">delete</button></div>
</div>
</div>


}

export default Todoitem2;