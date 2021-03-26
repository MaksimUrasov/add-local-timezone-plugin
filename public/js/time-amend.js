function time_amend {
    window.addEventListener("load", function(event) {
        alert('hello there this is a test time popup');
        
    // first we get the post create time and offset
        const originalPostTime = document.querySelector(".entry-date").dateTime;        //get time from a <time> node
        const originalPostTimeInBrowsersTimeZone = new Date(Date.parse(originalPostTime));                      // convert string to js Date object
        // const OldPostTimeDateOffset = OldPostTimeDate.getTimezoneOffset()   // get an offset of post creator time zone, in minutes
        console.log(`originalPostTime: ${originalPostTime} , originalPostTimeInBrowsersTimeZone: ${originalPostTimeInBrowsersTimeZone} `    )
    // then we get current browser time and offset
        // const currentBrowsersTime = new Date()
        // const currentBrowsersTimeOffset = currentBrowsersTime.getTimezoneOffset()
        // console.log(currentBrowsersTime, currentBrowsersTimeOffset);

    // 2) currentServerTime
        const originalTimeElement = document.querySelector(".entry-date")

        const newTimeElementBR = document.createElement('br');
        originalTimeElement.appendChild(newTimeElementBR);
        const newPElement = document.createElement('p');
        originalTimeElement.appendChild(newPElement);
        const newTimeElement = document.createElement('time');
        originalTimeElement.appendChild(newTimeElement);
        
        const textInPNode = document.createTextNode("Publishing time in local time:")
        newPElement.appendChild(textInPNode)

        const timeNode = document.createTextNode(originalPostTimeInBrowsersTimeZone)
        newTimeElement.appendChild(timeNode)

    });
}
