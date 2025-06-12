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
const totalSteps = 2;

let currentViewStep = 1;
const totalViewSteps = 2;

function openAddIntModal()   //fn to handle adding intern details
{
    const modalElement = document.getElementById('addInternModal');
    const modal = new bootstrap.Modal(modalElement);
    showStep(currentStep);
    modal.show();
}


function closeAddIntModal() //closing the modal for adding intern details
{
    const modalElement = document.getElementById('addInternModal');
   const modal = bootstrap.Modal.getInstance(modalElement);
   modal.hide();
}
function openInternDetailModal() //fn to open view intern details modal
{
    const Element = document.getElementById('internDetailModal');
    const modal2 = new bootstrap.Modal(Element);
    showViewStep(currentViewStep);
    modal2.show();
}

function closeInternDetailModal()
{
    const Element = document.getElementById('internDetailModal');
    const modal2 = bootstrap.Modal.getInstance(Element);
    modal2.hide();
}



function showStep(step) //paging fn for add intern details modal
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
// details will have to be loaded from backend
function showViewStep(step)   //paging fn for view intern details modal
{
    document.querySelectorAll('.viewStep').forEach((el) => el.style.display ='none');
    document.getElementById(`viewStep${step}`).style.display= 'block';
}

function nextViewStep()
{
    if(currentViewStep < totalViewSteps)
    {
        currentViewStep++;
    showViewStep(currentViewStep);
    }

}
function prevViewStep()
{
    if(currentViewStep > 1)
    {
        currentViewStep--;
    showViewStep(currentViewStep);
    }

}



