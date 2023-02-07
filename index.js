function bodyLoaded() {
    let audio = new Audio("sunflower.mp3") // Importing Audio
    let hour = document.getElementById("hour") // Getting hour from <select>
    let min = document.getElementById("min") // Getting min from <select>
    let ampm = document.getElementById("ampm") // Getting ampm from <select>
    let antiPrime = document.getElementById("antiPrime") // Getting AM/PM from the Current Time

    const btn = document.createElement("input"); // Creating a <input> that will stop the Audio of the Alaram
    btn.setAttribute("type", "submit") // Setting Attribute i.e. <input type="submit">
    btn.setAttribute("value", "Off Alarm") // Setting Attribute i.e. <input type="submit" value="Off Alarm">
    btn.setAttribute("id", "offAlarm") // Setting Attribute i.e. <input type="submit" value="Off Alaram" id="offAlarm">



    setInterval(() => { // SetInterval for displaying the current Time that will continously change after 1000ms
        let time = new Date(); // Creating an object of Date
        let H = document.getElementById("H") // Area where current Hour will be shown
        let M = document.getElementById("M") // Area where current Minutes will be shown
        let S = document.getElementById("S") // Area where current Seconds will be shown

        currHour = Math.floor(time.getHours() % 12) // Conveting time format which is bydefaut 24 to 12 and storing it
        currMin = time.getMinutes() // Getting Current Minutes to be displayed
        currSec = time.getSeconds() // Getting Current Seconds to be displayed

        H.innerText = currHour // Displaying Current Hour
        M.innerText = currMin  // Displaying Current Minutes
        S.innerText = currSec// Displaying Current Seconds 
        if ((time.getHours()) > 12) // Logic for checking whether it is AM or PM. As the default format of getHours is 24 so
        {
            antiPrime.innerText = "PM" // we are checking if the current hour is Greater Than 12 then it is PM
        }
        else {
            antiPrime.innerText = "AM" // else PM
        }     
    }, 1000)

    let setAlarm = document.getElementById("setAlarm"); // Getting the button to Set Alarm
    setAlarm.addEventListener("click", (e) => { // Adding click Event to it
        let mint = min.value // Setting Minutes value which get from <select> on selecting them
        let hours = hour.value // Setting Hours value which get from <select> on selecting them
        let ap = ampm.value // Setting AM or PM value which get from <select> on selecting them

        if (mint == "Minutes" && hours == "hour") { //If user has not selected time from <select>
            alert("please select Hours and Minutes :)") // It will give an alert to select it

        }
        else { //else the alarm will be set

            alert("Alarm set. Notice \" You can only stop Alarm after One Minute \" ") //alerting  "alarm setted"
            setInterval(() => { // Creating a setInterval() because that will continuosly check the condition
                                // at every 2000ms i.e. if user entered hours and minutes are same to the current time or not

                if (H.innerText == hours && M.innerText == mint && antiPrime.innerText == ap) {
                    audio.play() //if current time and user entered time are matched alarm audio will be played
                    setAlarm.remove() // Removing Set Alarm Button to display the Off Alarm button
                    let mainContent = document.getElementById("main-content"); // Getting Id of container where Off Alarm button to be displayed
                    mainContent.appendChild(btn) // Adding or append the Off Alarm Button that we created at the Starting
                    btn.addEventListener("click", () => { // Adding click event to stop or pause the alarm audio
                        audio.pause()
                        audio.currentTime = 0
                        // alert("if you want to set alarm Again please Refresh the Page :))")
                    })
                }
                e.preventDefault()
            }, 2000)
        }

    })

}
