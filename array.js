let values = [];
let arraye = [];
function getValues() {
  let nameVar = document.getElementById("name").value;

  values.push(this.gender.value);
  values.push(this.age.value);
  values.push(this.debt.value);
  values.push(this.married.value);
  values.push(this.customer.value);
  values.push(this.time.value);
  values.push(this.dfault.value);
  values.push(this.employed.value);
  values.push(this.creditScore.value);
  values.push(this.license.value);
  values.push(this.income.value);

  arraye.push(this.iiD.value);
  arraye.push(nameVar);

  if (this.gender.value === "1") {
    arraye.push("M");
  } else if (this.gender.value === "0") {
    arraye.push("F");
  }

  arraye.push(this.age.value);

  arraye.push(this.debt.value);

  if (this.married.value === "1") {
    arraye.push("Y");
  } else if (this.married.value === "0") {
    arraye.push("N");
  }

  if (this.customer.value === "1") {
    arraye.push("Y");
  } else if (this.customer.value === "0") {
    arraye.push("N");
  }

  let sel = document.getElementById("industry");
  for (i = 0; i < sel.options.length; i++) {
    if (sel.options[i].selected) {
      sel.options[i].value = 1;
    } else {
      sel.options[i].value = 0;
    }
  }

  for (i = 0; i < sel.options.length; i++) {
    values.push(sel.options[i].value);
    if (sel.options[i].selected) {
      arraye.push(sel.options[i].id);
    }
  }

  let sel2 = document.getElementById("ethnicity");
  for (i = 0; i < sel2.options.length; i++) {
    if (sel2.options[i].selected) {
      sel2.options[i].value = 1;
    } else {
      sel2.options[i].value = 0;
    }
  }

  for (i = 0; i < sel2.options.length; i++) {
    values.push(sel2.options[i].value);
    if (sel2.options[i].selected) {
      arraye.push(sel2.options[i].id);
    }
  }

  arraye.push(this.time.value);

  if (this.dfault.value === "1") {
    arraye.push("Y");
  } else if (this.dfault.value === "0") {
    arraye.push("N");
  }

  if (this.employed.value === "1") {
    arraye.push("Y");
  } else if (this.employed.value === "0") {
    arraye.push("N");
  }

  arraye.push(this.creditScore.value);

  if (this.license.value === "1") {
    arraye.push("Y");
  } else if (this.license.value === "0") {
    arraye.push("N");
  }

  let sel3 = document.getElementById("citizenship");
  for (i = 0; i < sel3.options.length; i++) {
    if (sel3.options[i].selected) {
      sel3.options[i].value = 1;
    } else {
      sel3.options[i].value = 0;
    }
  }

  for (i = 0; i < sel3.options.length; i++) {
    values.push(sel3.options[i].value);
    if (sel3.options[i].selected) {
      arraye.push(sel3.options[i].id);
    }
  }

  arraye.push(this.income.value);

  console.log(values);

  console.log(arraye);

  makePrediction();
  updateDatabase();

  values.splice(0, values.length);
  //arraye.splice(0, arraye.length);
}

function updateDatabase(){
  // Using fetch to send the data to the server
  fetch('http://localhost:7000/updateDatabase', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({values:arraye}),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Database done:', data);
    })
    .catch(error => {
      console.error('Error database:', error);
    });

}
