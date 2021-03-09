const reachDestination = (distance, speed) => {
    let time = (distance/speed);
    let timeRounded = (Math.round(time * 2))/2;


if (timeRounded === 1) {
    return "I should be there in 1 hour."
}

return "I should be there in " + timeRounded + " hours."

};

module.exports = reachDestination;
