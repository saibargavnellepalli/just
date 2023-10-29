import React from 'react';

let data = [
    {
        imgUrl : "https://occ-0-4110-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW15GBTzru86iaN4ZrQHs_FSUT4gz3EmTQ7dF4yNpwUA4RgyExN9X6WdhKORNrwHprHOhOI8uNJ9euf_aFbsHBzkRNsTYFvpAFuIwcJ-jj4PCK_fTgyYAfnZG2c9OBrmeJhI.jpg?r=7f6",
        title : "Kung fu panda",
        descrition : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    
       {
            imgUrl : "https://occ-0-4110-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWzPR8nR7Bcjz3Vgkn8zYyeOTjb5AtST4PEoxaZkbs_JlYcXyzTaNRwGa6t4UclSGnAtLiWeq7tMKIv5OqyM7dvKZLoah52bMgYuoCdxKVDnGOX7TCxP1TeQvYhwVgP79Lhm.jpg?r=501",
             title : "Lucifer",
            descrition : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
       },

    {
        imgUrl : "https://occ-0-4110-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSNtJvu8215Gl8GlVv_EEDFMgltlMgvQGUb_8wpfUL6BKCLHa5PYQcZZVizJJhcTCUsy4ST5mhGNGGffm-MYgGgdgvIGJf_OvT0IPUEke88IaN7ireJ4uV_BVLjVTXbwlfo1.jpg?r=c68",
        title : "Litcher",
      descrition : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
   }

]







//props

const Movie = (props) => {
    console.log(props)
    return (

        <div className='movie'>
        
        <img src = {props.img} />
        <h1>{props.title}</h1>
        <p>{props.des}</p>


        </div>
    )
}

 //props

 const App = () => {
     
      
    return(
      <div className='movie-grid '>



       {/* <Movie  img = {data[0].imgUrl}
        title = {data[0].title} 
        des = {data[0].descrition} />

        <Movie  img = {data[1].imgUrl} 
        title = {data[1].title}
         des = {data[1].descrition} />

       <Movie  img = {data[2].imgUrl} 
       title = {data[2].title} 
       des = {data[2].descrition} /> */}


       {data.map((item) =>
       <Movie 
       img = {item.imgUrl}
       title = {item.title}
       des = {item.descrition}  />
       )}
       
    </div>


    )
 }



export default App;