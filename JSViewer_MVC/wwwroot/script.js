﻿import {createViewer} from './jsViewer.min.js';

function selectReportElement(reportName) {
    const reportsList = document.getElementById("reportsList");
    const reports = reportsList.children;

    for (let i = 0; i < reports.length; i++) {
        if (reports[i].children[0].innerText === reportName)
            reports[i].classList.add('active');
        else
            reports[i].classList.remove('active');
    }
}

function getReports() {
    return fetch("reports")
        .then(response => response.json())
        .catch(error => {
            console.error("Error fetching reports:", error);
            return [];
        });
}

function fillReportsList(reports) {
    const reportsList = document.getElementById("reportsList");
    reportsList.innerHTML = "";
    for (let i = 0; i < reports.length; i++) {
        const reportName = reports[i];
        const reportElement = document.createElement('li');
        reportElement.className = 'navbar-item';
        const title = document.createElement('span');
        title.innerText = reportName;
        reportElement.appendChild(title);
        reportsList.appendChild(reportElement);

        reportElement.addEventListener('click', function () {
            openReport(reportName);
        });
    }
}

function openReport(reportName) {
    viewer.openReport(reportName);
    selectReportElement(reportName);
}

const viewer = createViewer({
    element: '#viewerContainer'
});


getReports().then(reports => {
    if (reports.length > 0) {
        fillReportsList(reports);
        openReport(reports[0]);
    }
});