fetch("https://timeapi.mininxd.my.id/", {
  header: {
    "Content-Type": "Application/JSON",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const serverdate = data.date;
    const serverday = data.day;
    const servertime = data.time;
    const serveryear = data.year;
    const servertime12h = data.time12;
    const servertime24h = data.time24;

    //leap year check
    let leap = new Date(data.year, 1, 29).getDate() === 29;
    if (leap) {
      console.log("leap year is " + leap);
    } else {
      console.log("leap year is " + leap);
    }
    //max days if leap year
    if (leap === true) {
      var maxdays = "366";
    } else {
      var maxdays = "365";
    }

    //
    //
    //time start (1 january ××××)
    var date1 = new Date("01/01/" + data.year);
    //time now
    var date2 = new Date(serverdate);
    //get time of hour
    var timeGet = date2.getTime() - date1.getTime();
    //set into days
    var Difference_In_Days = timeGet / (1000 * 3600 * 24);

    //progress line
    const progress = document.getElementById("progress");
    //percentage of days
    const percent = document.getElementById("days_percentage");
    //disable decimals of days total
    const total = Difference_In_Days;

    //set timeout for declaring progress and % after 2s if not loaded
    const timeout = setTimeout(function () {
      //information of %
      percent.innerHTML = Math.trunc((total / maxdays) * "100") + "%";
      //year
      document.getElementById("year").innerHTML = serveryear;
      //progress
      progress.style.width = Math.trunc((total / "365") * "100") - 1 + "%";
      //Timeout time
    }, 2000);

    //
    //

    //extra information
    var date_decimal = (total / "365") * "100";
    document.getElementById("days_percentage_decimals").innerHTML =
      date_decimal.toFixed(2);

    document.getElementById("days_total").innerHTML = total;
    document.getElementById("maxdays").innerHTML = maxdays;

    document.getElementById("servertime").innerHTML = servertime;

    document.getElementById("servertime12H").innerHTML =
      servertime12h + " " + data.AMPM.toUpperCase();

    document.getElementById("servertime24H").innerHTML = servertime24h;
  });
