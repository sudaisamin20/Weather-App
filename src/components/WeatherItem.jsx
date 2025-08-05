import React, { useState } from 'react'
import { useLocation } from './SearchContextApi'
import NotAvailableLocation from "./NotAvailableLocation"
import loadingImg from '../loading.gif'
import { CiSearch } from "react-icons/ci"

const WeatherItem = (props) => {
    const { data, weather, loading } = props
    const [search, setSearch] = useState("charsadda")
    const { updateLocation } = useLocation()
    const handleSearchInput = (event) => {
        setSearch(event.target.value)
    }
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            updateLocation(search)
        }
    }
    return (
        <div className='h-screen w-screen flex flex-col bg-gradient-to-b from-black to-gray-950 justify-between'>
            <div className='text-white flex justify-between items-center p-5'>
                <h1 className='text-3xl max-[450px]:text-xl max-[320px]:text-xs'>Weather App</h1>
                <h1 className='text-2xl max-[450px]:text-xl max-[320px]:text-xs'>Sudais Amin</h1>
            </div>
            <hr />
            <div className='mt-12 flex justify-center'>
                <input type="search" name="search" id="search" placeholder='Search Location/City' className='p-2 pl-4 text-black rounded-l-3xl max-[340px]:w-40 max-[280px]:w-32' onChange={handleSearchInput} onKeyPress={onKeyPress} />
                <button className='transition-all text-black rounded-r-3xl px-5 max-[340px]:px-2 max-[220px]:px-1 bg-white' onClick={() => updateLocation(search)}><CiSearch size={32} /></button>
            </div>
            {
                loading ? <div className='flex justify-center items-center h-full'><img src={loadingImg} className='h-24 w-24' alt="noImage" /></div> :
                    <div className='flex flex-col h-screen justify-center items-center'>
                        {/* eslint-disable-next-line */}
                        {data.cod == 404 ? <NotAvailableLocation message={data.message} />
                            : <div>
                                {weather?.map((e, i) => {
                                    return <div key={i} className='text-white text-center '>
                                        <p className='text-4xl max-[280px]:text-xl  mb-5'>{`${data.name}, ${data.sys.country}`}</p>
                                        <h1 className='text-3xl max-[280px]:text-xl m-5'>{`${Math.round(data.main.temp - 273.15)}°C`}</h1>
                                        <h1 className='text-3xl max-[280px]:text-xl m-5'>{`Feels like: ${Math.round(data.main.feels_like - 273.15)}°C`}</h1>
                                        <div className='flex justify-center items-center m-5'>
                                            <span className='text-3xl max-[280px]:text-xl'>{e.main}</span>
                                            <img src={`http://openweathermap.org/img/w/${e.icon}.png`} className='mx-4 mt-2' alt="noImage" />
                                        </div>
                                        <p className='text-3xl max-[280px]:text-xl m-5'>{(e.description ? e.description.charAt(0).toUpperCase() : e.description.charAt(0)) + (e.description ? e.description.slice(1, e.description.length) : e.description)}</p>
                                        {/* eslint-disable-next-line */}
                                        <div className='flex justify-center'>
                                            <div className={`flex justify-between max-[290px]:flex-col text-white text-center max-[350px]:p-[1px] p-3 sm:p-6 text-sm w-full max-[290px]:w-[50%] sm:text-lg max-[400px]:text-[10px] rounded-md `} style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}>
                                                <div className='p-2 mx-1 sm:mx-3 '>{`Min temp: ${(data.main ? Math.round(data.main?.temp_min - 273.15) : undefined)}°C`}</div>
                                                <div className='p-2 mx-1 sm:mx-3'>{`Max temp: ${(data.main ? Math.round(data.main?.temp_max - 273.15) : undefined)}°C`}</div>
                                                <div className={`p-2 mx-1 sm:mx-3`}>{`Humidity: ${data.main ? data.main?.humidity : undefined}%`}</div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        }
                    </div>
            }
        </div>
    )
}

export default WeatherItem
