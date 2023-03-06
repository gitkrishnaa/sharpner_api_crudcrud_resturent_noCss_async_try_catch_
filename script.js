// const update_btn1.
if (
  localStorage.getItem('database_id') == undefined ||
  localStorage.getItem('database_id') == null ||
  localStorage.getItem('database_id') == ''
) {
  localStorage.setItem('database_id', prompt('please update crucrud id'));
} else {
}
// f13260231b284aa4a9ad099ce5a97187
document.querySelector('#id_update').addEventListener('click', () => {
  localStorage.setItem(
    'database_id',
    document.querySelector('#input_id_update').value
  );
  alert("id is updated in localstorage key 'database_id' and refresh");
});

const id_database = localStorage.getItem('database_id');





//0eadc76a30bd47a79fadcf755c1083d5
//html input in to variable
const body = document.querySelector('body');

const item  = document.querySelector('#item');
const price = document.querySelector('#price');
const table = document.querySelector('#table');
const add  = document.querySelector('#btn1');

// loding function
//get from aios

async function get_data() {
  try {
    let x = await axios.get(
      'https://crudcrud.com/api/' + id_database + '/order'
    );
    return x.data;
  } catch (e) {
    console.log(e, 'somthing error in get_data function');
  }
}

async function post_data(inp_item, inp_price, inp_table) {
  try {
    let x = await axios.post(
      'https://crudcrud.com/api/' + id_database + '/order',
      {
        item: inp_item,
        price: inp_price,
        table: inp_table,
      }
    );
    // console.log(x)
    return [x.data];
  } catch (e) {
    console.log(e, 'somthing error in post_data function');
  }
}


//delete in server
async function delete_data(id) {
  try {
    let x = await axios.delete(
      'https://crudcrud.com/api/' + id_database + '/order/'+id
    );
    return x;
  } catch (e) {
    console.log(e, 'somthing error in delete_data function');
  }
}
// delete_data("640654d5a997a303e8776278")

async function loader(opreation) {
  try {
    let data = await opreation;
    console.log(data);
    // data fetch and load in respeted table
    data.forEach((data1) => {
      try {
        console.log(data1);
        //table targeting by data1.table
        const table = document.querySelector(`#${data1.table}`);

        //create div and append in to table
        const main_div = document.createElement('div');
        table.appendChild(main_div);

        //createing item_name,price  and delete button/ note-delete button id will be data1._id-post id of data
        //**structe of respond data */
        // cost: "732"
        // item: "dfbf"
        // table: "t1"
        // _id: "640580e9a997a303e8775caf"
        //
        const item_name = document.createElement('span');
        item_name.innerText = data1.item + '  ';
        main_div.appendChild(item_name);

        const price = document.createElement('span');
        price.innerText = data1.price;
        main_div.appendChild(price);

        const button = document.createElement('button');
        main_div.appendChild(button);
        button.innerText = 'Delete order';
        button.id = data1._id;
        //adding delete functionality
        button.addEventListener("click",async ()=>{
          main_div.style.display="none";
          const response= await delete_data(button.id)
          console.log(response,"item is deleted of id is", button.id)
         
        })



      } catch (e) {
        console.log(e, data1._id, 'id has some issuse');
      }
    });
  } catch (e) {
    console.log(e, 'error in loading part');
  }
}


// 

// // console.log();
body.addEventListener('DomContententLoaded', loader(get_data()));


add.addEventListener("click",()=>{
   
  if(item.value==""){
    alert("item name field is empty");
    return;
return;
  }
  else if(price.value==""){
    alert("price field is empty");
    return;
  }
  
  loader(post_data(item.value,price.value,table.value))
})  




























// function loader(){
//   axios.get('https://crudcrud.com/api/'+id_database+'/order', {

// })

// .then(function (response) {
//   console.log(response.data);
// const data=response.data;
// let x=[]
// data.forEach((a)=>{
// console.log(a.table)
// let div1=document.createElement("div");
// div1.innerHTML=`${a.item} ${a.cost}`
// document.getElementById(`${a.table}`).appendChild(div1)

// const delete_btn=document.createElement("button");
// delete_btn.innerText="delete item"
// div1.appendChild(delete_btn)
// delete_btn.id=a._id

// delete_btn.addEventListener("click",(e)=>{
//   console.log(e.target.id);
//   div1.style.display="none"
//   axios.delete(`https://crudcrud.com/api/${id_database}/order/${e.target.id}`, {

// })

// })

// })
// })

// .catch(function (error) {
// console.log(error);
// });
// }

// loader()

// function axios_call(i,c,t){
//   if(i==undefined){
//     return
//   }
//  axios.post(`https://crudcrud.com/api/${id_database}/order`, {
// item: i,
// cost: c,
// table:t
// })

// .then(function (response) {
//   console.log(response);
//   let div1=document.createElement("div");
// div1.innerHTML=`${item.value} ${cost.value}`
// document.getElementById(`${table.value}`).appendChild(div1)

// const delete_btn=document.createElement("button");
// delete_btn.innerText="delete item"
// div1.appendChild(delete_btn)
// delete_btn.id=response.data._id
// console.log(response.data._id)
// delete_btn.addEventListener("click",(e)=>{
//   console.log(e.target.id);
//   div1.style.display="none"
//   axios.delete(`https://crudcrud.com/api/${id_database}/order/${e.target.id}`, {

// })

// })

// })

// .catch(function (error) {
// console.log(error);
// });
// }

// const btn1=document.querySelector("#btn1");

// btn1.addEventListener("click",()=>{
//   const cost=document.querySelector("#cost");
//   const item=document.querySelector("#item");
//   const table=document.querySelector("#table");

// console.log(cost.value,item.value,table.value)

// axios_call(item.value,cost.value,table.value);

// })

// async function fetchData() {
//   try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
// }
// fetchData().then(()=>console.log("hello"))

// async function f() {
//   return Promise.resolve(1);
// }

// f().then(alert); // 1
