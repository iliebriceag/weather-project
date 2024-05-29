function getDayWeekName(dateObj) {
    var dayIndex = dateObj.getDay();

    switch (dayIndex) {
        case 0:
            return "Duminica";
        case 1:
            return "Luni";
        case 2:
            return "Marti";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sambata";
        default:
            throw 'Ziua nu corespunde'

    }
}