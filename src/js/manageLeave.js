//getting the leave requests from the database through backend sample flow
fetch('api/get-pending-leave-requests')
.then(res => res.json())
.then(leaves => {
    const tbody = document.querySelector('.pendingApprovalTable tbody');
    leaves.forEach(leave => {
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>${leave.apply_date}</td>
        <td>${leave.employee_id}</td>
        <td>${leave.employee_name}</td>
        <td>${leave.from_date}</td>
        <td>${leave.to_date}</td>
        <td>${leave.leave_type}</td>
        <td class="actions">
                    <button class="approveBtn"><i class="bi bi-check2-circle"></i></button>
                    <button class="disapproveBtn"><i class="bi bi-x-circle-fill"></i></button>
                  <button><i class="bi bi-eye"></i></button>
                </td>`;
        tbody.appendChild(row);
    });
    attachButtonListeners();
});

function attachButtonListeners()
{
    document.querySelectorAll('.approveBtn, .disapproveBtn').forEach(button=>
    {
        button.addEventListener('click',function()
        {
            const isApproval = this.classList.contains('approveBtn');
            const statusText = (isApproval) ? 'Approved' : 'Disapproved';
            const originalRow = this.closest('tr');
            const columns = originalRow.querySelectorAll('td');
            const application_date = columns[0].textContent;
            const id = columns[1].textContent;
            const name = columns[2].textContent;
            const fromDate = columns[3].textContent;
            const toDate = columns[4].textContent;
            const leaveType = columns[5].textContent;
            //adding new row to the approval table
            const newRow = document.createElement('tr');
            newRow.innerHTML=`
            <td>${application_date}</td>
            <td>${id}</td>
            <td>${name}</td>
            <td>${fromDate}</td>
            <td>${toDate}</td>
            <td>${leaveType}</td>
            <td>${statusText}</td>
            <td class="actions"><button><i class="bi bi-eye-fill"></i></button></td>
            `;
            document.querySelector('.finalApprovalTable tbody').appendChild(newRow);
            originalRow.remove(); //remove the row that has been approved or disapproved from the pending table as it has been added to the approved /disapproved table

        
        fetch('/api/update-leave-status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              leaveId: id,
              status: statusText
            })
          })
          .then(res => res.json())
          .then(data => console.log('Status updated', data))
          .catch(err => {
            alert('Update failed');
            console.error(err);
          });
        });

    });


}

const statusText = document.querySelectorAll('.status')
statusText.forEach(element =>
{
    if (element.textContent === 'Approved')
    {
        element.style.color = "green";
    }
    else if (element.textContent === 'Disapproved')
    {
        element.style.color = "red";
    }
});