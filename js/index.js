var content = { 'calendar': {} }

var options = {'schedule': {'time': [7,15]}}

var createSchedule = () => {
    var timeCol = document.getElementById("time-col");
    for(var i=options.schedule.time[0]; i<=options.schedule.time[1]; i++){
        var elem = document.createElement("div");
            elem.className = "calendar-time-label";
            elem.innerHTML = i + ":00";
        timeCol.appendChild(elem);
    }
    for(var i=options.schedule.time[0]; i<options.schedule.time[1]; i++){
        for(let j=0; j<5; j++){
            var elem = document.createElement("div");
                elem.className = "calendar-box";
            document.getElementsByClassName("calendar-column")[j].appendChild(elem);
        }
    }
}

var init = () => {
    createSchedule();
}

init();