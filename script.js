let selectedRow = null;
function onFormSubmit(e){   
          // onFormSubmit event
   event.preventDefault();   
  let data1 = Isempty();
   if(data1 === true){
    return;
  }
  
  let formData = readFormData(); 
       //formdata is all retrive data
  if(selectedRow === null){      
    // if selectedrow is null
    insertNewRecord(formData);         //then insertnewRecord function    
  }                                      //(formdata) ma store thase
  else{                                 
                                    //else value in form then updateRecord
                                 //(formdata) ma store thse
    updateRecord(formData);
  
  }
  
  resetForm();
}
//retrive the data 

function readFormData (){                      // readformdata function 
  let formData = {};
  formData['qty'] = document.getElementById('qty').value;                           // all data store in formData
  formData['product'] = document.getElementById('product').value;
  formData['productCode'] = document.getElementById('productCode').value;
  //read all data store
  formData['category'] = document.getElementById('category').value;
  formData['perPrice'] = document.getElementById('perPrice').value;
  return formData; 
}
// inset the data

function insertNewRecord(data){                //insertNewRecord function
  let table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
// table storelist item and tbody get by id


  let newRow = table.insertRow(table.length);   //row insert by tablelength 
  let cell1 = newRow.insertCell(0);          //cell insert by qty
    cell1.innerHTML = data.qty; 
  let cell2 = newRow.insertCell(1);         //cell insert by id product
    cell2.innerHTML = data.product; 
  let cell3 = newRow.insertCell(2);         //cell insert by id productCode 
    cell3.innerHTML = data.productCode;
  let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.category; 
  let cell5 = newRow.insertCell(4);          //cell insert by perPrice
    cell5.innerHTML = data.perPrice; 
  let cell6 = newRow.insertCell(5);          //cell insert by button 
    cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;    
}


//edit the data

function onEdit(td){                          //OnEdit Funtion
  selectedRow = td.parentElement.parentElement;    //td no parentlement  
  document.getElementById('qty').value = selectedRow.cells[0].innerHTML;
  document.getElementById('product').value = selectedRow.cells[1].innerHTML;
  document.getElementById('productCode').value = selectedRow.cells[2].innerHTML;                     //value shhow by id
  document.getElementById('category').value = selectedRow.cells[3].innerHTML;
  document.getElementById('perPrice').value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){               //update record function
  selectedRow.cells[0].innerHTML = formData.qty;
  selectedRow.cells[1].innerHTML = formData.product;

  selectedRow.cells[2].innerHTML = formData.productCode;
  //update value id 
  
  selectedRow.cells[3].innerHTML = formData.category;
  selectedRow.cells[4].innerHTML = formData.perPrice;
}

//delete the data 

function onDelete(td){                //ondelete Function
  if(confirm('are you sure')){            
    let row = td.parentElement.parentElement      
    document.getElementById('storeList').deleteRow(row.rowIndex)

    //delete by getelementbyid then deleteRow method thi rowIndex thi delete
  }
  resetForm();
}

//reset the data 
function resetForm(){
  document.getElementById('qty').value = '';
  document.getElementById('product').value = '';
  document.getElementById('productCode').value = '';
  document.getElementById('category').value = '';
  document.getElementById('perPrice').value = '';
}


function Isempty(){
  let quantity = document.getElementById('qty').value;
  let productName = document.getElementById('product').value;
  let productcode = document.getElementById('productCode').value;
  let categorys = document.getElementById('category').value;
  let prices = document.getElementById('perPrice').value;
  

  if(quantity.trim().length > 0 && productName.trim().length > 0 &&productcode.trim().length > 0 && prices.trim().length > 0){
    return false;
  }
  alert('all field required');
  return true;
}