const employeeData = //fetch 
{
    firstName: "Anushka",
    lastName:  "Pandey",
    fullName: "Anushka Pandey",
    employeeId: "E1234",
    userId : "U1234",
    password : "1y37ejd",
    bloodGroup : "A+",
    dateOfBirth : "21-10-2003"

};

let currentStep = 1;
const totalSteps = 3;

function openEmpDetailModal()
{
    const modalElement = document.getElementById('empDetailModal');
    const modal = new bootstrap.Modal(modalElement);
    populateData();
    showStep(currentStep);
    modal.show();
}

function closeEmpDetailModal()
{
    const modalElement = document.getElementById('empDetailModal');
   const modal = bootstrap.Modal.getInstance(modalElement);
   modal.hide();
}

function populateData() {
    document.getElementById("firstName").textContent = employeeData.firstName;
    document.getElementById("lastName").textContent = employeeData.lastName;
    document.getElementById("fullName").textContent = employeeData.fullName;
    document.getElementById("employeeId").textContent = employeeData.employeeId;
    document.getElementById("userId").textContent = employeeData.userId;
    document.getElementById("password").textContent = employeeData.password;
    document.getElementById("bloodGroup").textContent = employeeData.bloodGroup;
    document.getElementById("dob").textContent = employeeData.dateOfBirth;
  }

function showStep(step)
{
    document.querySelectorAll('.step').forEach((el) => el.style.display = 'none');
    document.getElementById(`step${step}`).style.display = 'block';

}

function nextStep()
{
    if(currentStep < totalSteps)
    {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep()
{
    if(currentStep > 1)
    {
        currentStep--;
        showStep(currentStep);

    }
}

document.querySelectorAll('.download-link').forEach((link)=> {
    link.addEventListener('click',function(e)
    {
    e.preventDefault();
    const empId = employeeData.employeeId;
    const fileUrl = `/certificates/${empId}`; //url to be changed according to backend
    const a = document.createElement('a');
    a.href=fileUrl;
    a.download='';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    });
});