export const getCurrentDateFormatted = function() {
    let currentDate = new Date();
    let formattedDate =
        currentDate.getFullYear() +
        "-" +
        (currentDate.getMonth() + 1) +
        "-" +
        currentDate.getDate();

    return formattedDate;
};