import React,{useState} from 'react'
import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import SchoolList from './SchoolList'
import GoogleApi from '../components/GoogleApi'
import { SchoolInfo } from '../components/SchoolCard'

const SchoolSearch = () => {
    const [ google,setGoole] = useState<any>(null)
    const [ schoolData,setSchoolData ] = useState<any[]|null>([])

    const handleSearch = async (keyword:string)=>{
       
        if(google){
            const sydney = new google.maps.LatLng(-33.867, 151.195);

            const map = new google.maps.Map(
                document.getElementById('map'), {center: sydney, zoom: 15}); 
            const request = {
                location:sydney,
                query: keyword,
                type:['school'],
                fields: ['icon','photos','name', 'geometry','types','formatted_address','formatted_phone_number','url'],
                };
            const   service = new google.maps.places.PlacesService(map);
            service.textSearch(request, function(results, status) {
                console.log(status,'results')
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                  const schoolData = results.map((item)=>{
                    const school:SchoolInfo={
                        name:item.name,
                        address:item.formatted_address,
                        phone:item.formatted_phone_number,
                        url:item.url,
                        img:item.photos?.[0].getUrl({maxWidth: 500, maxHeight: 500})
                    }
                    return school
                })
                  setSchoolData(schoolData)
                }else{
                    setSchoolData(null)
                }
              });
        }
    }

    return (
        <div className="w-full flex justify-center h-screen">
            <Head>
                <title>Find The Right School for You</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GoogleApi 
                onInited={(google)=>{
                    
                    setGoole(google)
                }}
            />
            <div className="w-full max-w-6xl p-4 h-full flex flex-col overflow-hidden">
                <div 
                    className="justify-center"
                    style={{
                        paddingTop:(schoolData&&schoolData.length>0)?"0":"10%"
                    }}
                >
                    <div className="flex justify-center pb-8">
                        <h1 className="text-lg lg:text-4xl">Find The Right School for You</h1>
                    </div>

                    <SearchBar 
                        onSearch={handleSearch}
                    />
                </div>
                <div className="overflow-auto">
                    {
                        schoolData!==null?(
                            <SchoolList schools={schoolData} />
                        ):(
                            <div className="flex justify-center"><h6>no result found</h6></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SchoolSearch
