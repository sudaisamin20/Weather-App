import React, { useEffect, useState } from 'react'
import WeatherItem from './WeatherItem'
import { useLocation } from './SearchContextApi'
import LoadingBar from 'react-top-loading-bar'

const Home = () => {
  // eslint-disable-next-line
  const [data, setData] = useState({})
  const [weather, setWeather] = useState([])
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  // eslint-disable-next-line
  const {location, updateLocation} = useLocation()
  const ProgressLoadingBar = (data) =>  {
    setProgress(data)
  }
  const fetchData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ae3c107f7ec0fbca6e2cd43632d03bed`
      setLoading(true)
      setProgress(10)
      let weatherData = await fetch(url)
      let parseData = await weatherData.json()
      setProgress(40)
      setData(parseData)
      setWeather(parseData.weather)
      setProgress(80)
      setLoading(false)
      setProgress(100)
    } catch (error) {
      setLoading(true)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [location])
  return (
    <div>
      <LoadingBar color='blue' height={"4px"} progress={progress} onLoaderFinished={() => ProgressLoadingBar(0)} />
      <WeatherItem data={data} weather={weather} loading={loading} />
    </div>
  )
}

export default Home
