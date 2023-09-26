// לקיחת מידע משרת והצגתו במסך. באינפוט המצורף ניתן לרשום אך ורק שם של עיר באנגלית הקוד יודע להפוך אותו לסינטקס המקורי של השרת ולשלוף ממנו את ..המידע הרצוי - מזג אוויר של היום ושל כל השבוע שלאחריו. יש םה שימוש באקסיוס כך שאם יש טעות בהקלדה של העיר לא יהיה באג באתר והוא לא יישבר אלא תוצג הודעה והכל יעבור בשלום.
let weather = document.querySelector("#weather");
let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let cityArr;
let fixCity;
let cityName = document.querySelector("#cityName");
let description = document.querySelector("#description");
let temperature = document.querySelector("#temperature");
let descriptionText = document.querySelector("#descriptionText");
let descriptionImg = document.querySelector("#descriptionImg");
let days = [
  document.querySelector("#day1"),
  document.querySelector("#day2"),
  document.querySelector("#day3"),
  document.querySelector("#day4"),
  document.querySelector("#day5"),
  document.querySelector("#day6"),
  document.querySelector("#day7"),
];
let dateARrr;
let dot = document.querySelector("#dot");

const weatherAsk = async (city) => {
  try {
    let currentWeather = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=e9f1120101344e74a74140018232609&q=${city}&days=8&aqi=no&alerts=no`
    );

    if (cityName) {
      cityName.innerHTML = cityInput.value.toUpperCase();
    }
    if (descriptionText) {
      descriptionText.innerHTML = currentWeather.data.current.condition.text;
    }
    if (descriptionImg) {
      descriptionImg.src = currentWeather.data.current.condition.icon;
    }

    if (temperature) {
      temperature.innerHTML = `${currentWeather.data.current.temp_c}°C`;
    }
    let i = 1;
    if (days) {
      for (let day of days) {
        dateARrr = currentWeather.data.forecast.forecastday[i].date.split("-");

        day.style.display = "flex";
        day.children[0].innerHTML = `${dateARrr[2]}/${dateARrr[1]}`;
        day.children[1].innerHTML = `${currentWeather.data.forecast.forecastday[i].day.avgtemp_c}°C`;
        day.children[2].innerHTML =
          currentWeather.data.forecast.forecastday[i].day.condition.text;
        day.children[3].src =
          currentWeather.data.forecast.forecastday[i].day.condition.icon;
        day.style.borderLeft = "1px dashed white";
        i++;
      }
    }
    if (cityInput) {
      cityInput.value = "";
    }
    if (dot) {
      dot.style.display = "flex";
    }
  } catch (err) {
    alert("החיפוש שלך לא מתאים, נסה משהו אחר");
    location.reload();
  }
};

window.addEventListener("load", () => {
  if (cityInput) {
    cityInput.value = "";
  }
  if (days) {
    for (let day of days) {
      day.style.display = "none";
    }
  }
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (!cityInput.value) {
        alert("אחי תרשום עיר כבר באנגלית");
      } else {
        cityArr = cityInput.value.split(" ");
        fixCity = cityArr[0];

        for (let i = 1; i < cityArr.length; i++) {
          fixCity += `-${cityArr[i]}`;
        }

        weatherAsk(fixCity);
      }
    });
  }
});
