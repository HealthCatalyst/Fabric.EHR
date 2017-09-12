function onpatientclick(patientid) {
    //alert(patientid);
    $('#ehrpaneid').attr('src', '/fabricpane/' + patientid);
    //alert(src);
    //document.getElementById('myIframe').src = '/fabricpane/' + patientid;
}