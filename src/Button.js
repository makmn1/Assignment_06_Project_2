function Button({text,color}){

    return(

        <div className="box">

               <button className="button" style={{backgroundColor:color}}>{text} </button>

        </div>



    ) 
}
export default Button