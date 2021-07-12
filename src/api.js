const API_KEY = '055492e51f32a94adbc9b075f73e863d';

export async function getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&appid=${API_KEY}`);
  return await response.json();
}
