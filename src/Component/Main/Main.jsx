import React , {useEffect}from 'react'
import './main.css'

import { HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img(1).jpg'
import img1 from '../../Assets/img(2).jpg'
import img2 from '../../Assets/img(3).jpg'
import img3 from '../../Assets/img(4).jpg'
import img4 from '../../Assets/img(5).jpg'
import img5 from '../../Assets/img(6).jpg'
import img6 from '../../Assets/img(7).jpg'
import img7 from '../../Assets/img(8).jpg'
import img8 from '../../Assets/img(9).jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

//let me paste the array named data 

 const Data = [
    {
     id:1,
     imgSrc:img,
     destTitle:'Bora Bora',
     location:'New Zealand',
     grade:'CULTURAL RELAX',
     fees:'$700',
     description:'the epitome of romance bora bora is one of the best travel destination inthe world . this place is know for its cultural .and adventures activities'
 },
 {
    id:2,
    imgSrc:img1,
    destTitle:'sidney',
    location:'Australia',
    grade:'CULTURAL RELAX',
    fees:'$free',
    description:'Australia is known for its friendly , people , unique wildlife , and outdoor activities'
},
{
    id:3,
    imgSrc:img2,
    destTitle:'Nexon',
    location:'Netherland',
    grade:'CULTURAL-party RELAX',
    fees:'$300',
    description:'The Netherlands, often referred to as Holland, is a country in Western Europe known for its flat landscape, extensive canal systems, and vibrant cities.'
},
{
    id:4,
    imgSrc:img3,
    destTitle:'Boancing',
    location:'Switzerland',
    grade:' RELAX',
    fees:'$700',
    description:'Switzerland is a beautiful country located in Central Europe, known for its stunning landscapes, high quality of life, and neutrality'
},
{
    id:5,
    imgSrc:img4,
    destTitle:'Nagasakhi',
    location:'Japan',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Japan combines traditional culture with cutting-edge technology, offering everything from serene temples and historic sites to high-tech urban experiences and gourmet cuisine.'
},
{
    id:6,
    imgSrc:img5,
    destTitle:'rope',
    location:'Europe',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Europe offers a wide range of cultural experiences, historical landmarks, and natural beauty, making it a diverse and fascinating destination to explore.'
},
{
    id:7,
    imgSrc:img6,
    destTitle:'Burj khalifa',
    location:'Dubai',
    grade:'CULTURAL RELAX',
    fees:'$900',
    description:'Dubai is a vibrant city in the United Arab Emirates, known for its modern architecture, luxury lifestyle, and dynamic atmosphere.'
},
{
    id:8,
    imgSrc:img7,
    destTitle:'Ladakh',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'The Himalayas are a major mountain range in Asia, stretching across five countries: Bhutan, China, India, Nepal, and Pakistan. They are known for their stunning peaks, including some of the world s highest mountains. '
},
{
    id:9,
    imgSrc:img8,
    destTitle:'zing po',
    location:'Dohari',
    grade:'CULTURAL RELAX',
    fees:'$1000',
    description:'this is one most popular toudrism destination . good cultura and good food . very looving people. '
},
]

const Main = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


    return (
       <section className='main container section'>
        <div className='secTitle'>
            <h3 data-aos="fade-right" className='title'>
                Most visited destination
            </h3>
        </div>
        <div className='secContent grid'>
            {
                Data.map(({id,imgSrc,destTitle,location,grade, fees,description })=>{
                    return(
                        <div key= {id}
                        data-aos="fade-up"
                        className='singleDestination'>
                      <div className='imageDiv'>
                        <img src={imgSrc} alt={destTitle} />
                      </div>
                           <div className='cardInfo'>
                            <h4 className='destTitle'>{destTitle}</h4>
                            <span className='continent flex'>
                                <HiOutlineLocationMarker className='icon'/>
                                <span className='name'>{location}</span>
                            </span>

                                 <div className='fees flex'>
                                    <div className='grade'>
                                        <span>{grade}<small>+1</small></span>

                                    </div>
                                    <div className='price'>
                                        <h5>{fees}</h5>
                                    </div>
                                 </div>
                                 <div className='desc'>
                                    <p>{description}</p>
                                 </div>

                                 <button className='btn flex'>
                                    DETAILS <HiOutlineClipboardCheck className='icon' />
                                 </button>
                           </div>
                        </div>
                    )
                })
            }

        </div>
       </section>
    )
}

export default Main