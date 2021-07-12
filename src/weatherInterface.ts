interface Main {
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_kf: number
  temp_max: number
  temp_min: number
}

interface Clouds {
  all: number
}

interface Wind {
  speed: number,
  deg: number,
  gust: number
}

interface Sys {
  pod: string
}

interface StatusWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface DayWeather {
  clouds: Clouds
  dt: number
  dt_txt: string
  main: Main
  pop: number
  sys: Sys
  visibility: number
  weather: StatusWeather
  wind: Wind
}

interface Coords {
  lat: number
  lon: number
}

interface City {
  coord: Coords | undefined
  country: string | undefined
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number | undefined
  timezone: number | undefined
}

export interface AllWeather {
  city: City
  cnt: number
  cod: string
  list: DayWeather[]
  message: number
}