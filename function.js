async function makePrediction() {
  let output = "";
  const postData = {
    Gender: values[0],
    Age: values[1],
    Debt: values[2],
    Married: values[3],
    BankCustomer: values[4],
    YearsEmployed: values[5],
    PriorDefault: values[6],
    Employed: values[7],
    CreditScore: values[8],
    DriversLicense: values[9],
    Income: values[10],
    Industry_CommunicationServices: values[11],
    Industry_ConsumerDiscretionary: values[12],
    Industry_ConsumerStaples: values[13],
    Industry_Education: values[14],
    Industry_Energy: values[15],
    Industry_Financials: values[16],
    Industry_Healthcare: values[17],
    Industry_Industrials: values[18],
    Industry_InformationTechnology: values[19],
    Industry_Materials: values[20],
    "Industry_Real Estate": values[21],
    Industry_Research: values[22],
    Industry_Transport: values[23],
    Industry_Utilities: values[24],
    Ethnicity_Asian: values[25],
    Ethnicity_Black: values[26],
    Ethnicity_Latino: values[27],
    Ethnicity_Other: values[28],
    Ethnicity_White: values[29],
    Citizen_ByBirth: values[30],
    Citizen_ByOtherMeans: values[31],
    Citizen_Temporary: values[32],
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(postData),
    credentials: "same-origin",
  };

  try {
    const response = await fetch("http://localhost:5000/prediction", options);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(result);

    if (result.prediction === "[1]") {
      output = `Congratulations! The requirements have been met for the Credit Card`;
    } else {
      output = `Sorry! The requirements couldn't be met for the Credit Card`;
    }

    document.getElementById("mainDiv").innerHTML = ` 
    <div class="finalDisp">
      
      <div class="output"> 
        ${output}
      </div>

      <div class="redirectDiv">
        <a href="file:///D:/Docs/Major%20Project/Code/Web/end/data_enter.html" >
          <button class="redirectButton">  
            Redirect To Input
          </button>
        </a>
      </div>

      <div class="recordsDiv">
        <a href="file:///D:/Docs/Major%20Project/Code/Web/end/show_records.html">
          <button class="recordsButton">
            Show records
          </button>
        </a>
      </div>

      <div class="homeDiv">
      <a href="file:///D:/Docs/Major%20Project/Code/Web/end/dashboard.html">
        <button class="homeButton">
          Go To Dashboard
        </button>
      </a>
    </div>
    </div>
    `;
  } catch (error) {
    alert("There was a problem with the POST request: ", error);
  }
}
