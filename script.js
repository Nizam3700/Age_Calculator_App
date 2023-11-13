// input form user() is function
function user(inputText){
    let year = document.getElementById("input3").value;
    let month = document.getElementById("input2").value;
    let days = document.getElementById("input1").value;

    if(days,month,year == 0){
      // User not enter any input
      // calling ALL Error function
      allError();
    }else if(days > 31 || days == 0){
      // calling function of date_error 
      errordate();
    }else if(month > 12 || month == 0){
      // calling function of month_error 
      errormonth();
    }else if(year > new Date().getFullYear()){ 
      // calling function of month_error 
      erroryear();
    }else{
      // All input is correct and valid calling function of DATA to Calculate the age 
      DATE();
    }
    
  }
 
// calculate user input with now date
  function DATE() {
    let year = document.getElementById("input3").value;
    let month = document.getElementById("input2").value;
    let days = document.getElementById("input1").value;

    const EndDate = new Date(`${year}-${month}-${days}`);
    const NowDate = new Date();
    const diffDate = NowDate - EndDate;

    // Convert milliseconds to years, months, and days
    let yearcal = Math.floor(diffDate / (365.25 * 24 * 60 * 60 * 1000));
    let monthcal = Math.floor((diffDate % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    let dayscal = Math.floor((diffDate % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    document.getElementById("yearspan").innerText = yearcal;
    document.getElementById("monthspan").innerText = monthcal;
    document.getElementById("daysspan").innerText = dayscal;
  }

  // if user not enter any input fields calling this function 
  function allError(){
    errordate();
    errormonth();
    erroryear();
  }
  
// error function 

  // Date Error not enter by user 
  function errordate() {
    // label color change on error 
    let labelDate = document.getElementById("labelDate");
    labelDate.style.color = "hsl(4, 100%, 67%)";
    // input box color change on error 
    let userdate = document.getElementById("input1");
    userdate.style.borderColor = "red";
    userdate.style.color = "hsl(4, 100%, 67%)";
    // create h3 using javascript
    let errordat = document.createElement("h3");
    errordat.className = "errordate";
    errordat.style.fontsize = "10px";
    errordat.textContent = "This Field is required";
    errordat.style.color = "hsl(4, 100%, 67%)";
    errordat.style.fontStyle = "italic";
    document.body.appendChild(errordat);

  }

  // Month Error not enter by user 
  function errormonth() {
    // label color change on error 
    let labelMonth = document.getElementById("labelMonth");
    labelMonth.style.color = "hsl(4, 100%, 67%)";
    // input box color change on error 
    let userdate = document.getElementById("input2");
    userdate.style.borderColor = "red";
    userdate.style.color = "hsl(4, 100%, 67%)";
    // create h3 using javascript
    let errordat = document.createElement("h3");
    errordat.className = "errormonth";
    errordat.style.fontsize = "10px";
    errordat.textContent = "This Field is required";
    errordat.style.color = "hsl(4, 100%, 67%)";
    errordat.style.fontStyle = "italic";
    document.body.appendChild(errordat);
  }

  // Year Error not enter by user 
  function erroryear() {
    // label color change on error 
    let labelYear = document.getElementById("labelYear");
    labelYear.style.color = "hsl(4, 100%, 67%)";
    // input box color change on error 
    let userdate = document.getElementById("input3");
    userdate.style.borderColor = "red";
    userdate.style.color = "hsl(4, 100%, 67%)";
    // create h3 using javascript
    let errordat = document.createElement("h3");
    errordat.className = "erroryear";
    errordat.style.fontsize = "10px";
    errordat.textContent = "This Field is required";
    errordat.style.color = "hsl(4, 100%, 67%)";
    errordat.style.fontStyle = "italic";
    document.body.appendChild(errordat);
  }

