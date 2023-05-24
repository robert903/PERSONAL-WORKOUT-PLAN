document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let startDate = new Date('2023-05-24');
            let today = new Date();
            let dayNumber = Math.ceil((today - startDate) / (1000 * 60 * 60 * 24));

            if (dayNumber >= 1 && dayNumber <= 30) {
                let workoutData = data['day' + dayNumber];

                document.getElementById('workout').innerHTML = workoutData['workout'].join('<br>');
                document.getElementById('meal').textContent = workoutData['meal'];
                document.getElementById('quote').textContent = workoutData['quote'];

                if (dayNumber % 7 !== 0) {
                    let weekNumber = Math.ceil(dayNumber / 7);
                    document.getElementById('grocery').innerHTML = data['groceries']['week' + weekNumber].join('<br>');
                    document.getElementById('grocery').style.display = 'block';
                } else {
                    document.getElementById('grocery').style.display = 'none';
                }
            } else {
                document.getElementById('workout').textContent = 'Workout plan is not available for today.';
                document.getElementById('meal').textContent = '';
                document.getElementById('quote').textContent = '';
                document.getElementById('grocery').style.display = 'none';
            }
        })
        .catch(error => console.error(error));
});
