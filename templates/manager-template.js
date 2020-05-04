function getManagerTemplate(managerObj) {

    let managerTemplate = `<div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${managerObj.name}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${managerObj.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${managerObj.email}">${managerObj.email}</a></li>
        <li class="list-group-item">Office number: ${managerObj.officeNumber}</li>
    </ul>
</div>
</div>`;

    return managerTemplate
}

module.exports = getManagerTemplate;


