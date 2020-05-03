function getEngineerTemplate(engineerObj) {

    let engineerTemplate = `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineerObj.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineerObj.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineerObj.email}">${engineerObj.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineerObj.github}" target="_blank" rel="noopener noreferrer">${engineerObj.github}</a></li>
        </ul>
    </div>
</div>`;

    return engineerTemplate
}

module.exports = getEngineerTemplate;