
import travelArr from './db.json';
function Tour(props){

    return(
       
        <>
       
{
travelArr.map(element =>{
return( 
<>
<p>{element.name}</p>
<img src={element.image}></img>
<p>==============</p>
</>



);

})

}
        </>
    );
}
export default Tour;