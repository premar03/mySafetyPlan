document.getElementById("safetyForm").addEventListener("submit", function(event){
    event.preventDefault();

    const warningSigns = document.getElementById("warningSigns").value;
    const copingStrategies = document.getElementById("copingStrategies").value;
    const distractions = document.getElementById("distractions").value;
    const crisisContacts = document.getElementById("crisisContacts").value;
    const professionalSupports = document.getElementById("professionalSupports").value;
    const environmentSafety = document.getElementById("environmentSafety").value;

    const summaryHTML = `
    <h3>Your Safety Map</h3>
    <p><strong>Warning Signs: </strong>${warningSigns}</p>
    <p><strong>Coping Strategies: </strong>${copingStrategies}</p>
    <p><strong>Settings, People, or Activities that Provide a Distraction: </strong>${distractions}</p>
    <p><strong>Who I Can Reach Out to in Crisis: </strong>${crisisContacts}</p>
    <p><strong>Professional Supports </strong>${professionalSupports}</p>
    <p><strong>Making my Environment Safer: </strong>${environmentSafety}</p>
    `;

    document.getElementById("summary").innerHTML = summaryHTML;
});