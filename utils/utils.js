function getDayWeekName(dateObject) {
    const date = new Date(dateObject * 1000);
    const dayIndex = date.getDay();
    let day;

    switch (dayIndex) {
        case 0:
            day = "Duminica";
            break;
        case 1:
            day = "Luni";
            break;
        case 2:
            day = "Marti";
            break;
        case 3:
            day = "Miercuri";
            break;
        case 4:
            day = "Joi";
            break;
        case 5:
            day = "Vineri";
            break;
        case 6:
            day = "Sambata";
            break;
        default:
            throw new Error("AROARE");
    }

    return day;
}

function getHour(dateObject) {
    const date = new Date(dateObject * 1000);
    let hours = date.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return `${hours}:${minutes}`;
}