const base_url = 'https://youtube-v31.p.rapidapi.com';

    const options = {
        method: 'GET',
        params:{
            maxResults: '50'
        } ,
          headers: {
            'X-RapidAPI-Key': 'd62a72cb6amsh4350a0b095f87eep1ed6f6jsndb9abacfe47b',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }  
    };
    
    export async function getVideosFromApi(url){
        const data=await fetch(`${base_url}/${url}`,options)
        const json=await data.json();
        return json
    }



    