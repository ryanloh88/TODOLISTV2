exports.getDate = function () {
    const today = new Date();

    const optional = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-US", optional)
}