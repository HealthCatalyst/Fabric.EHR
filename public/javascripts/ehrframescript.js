function onpatientclick(patientid) {
    alert(patientid);
    document.getElementById('myIframe').src = '/fabricpane/' + patientid;
}