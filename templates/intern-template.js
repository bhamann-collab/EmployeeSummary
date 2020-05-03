function getInternTemplate(internObj) {

    let internTemplate = `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${internObj.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${internObj.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${internObj.email}">${internObj.email}</a></li>
            <li class="list-group-item">School: ${internObj.school}</li>
        </ul>
    </div>
</div>`;

    return internTemplate
}

module.exports = getInternTemplate;