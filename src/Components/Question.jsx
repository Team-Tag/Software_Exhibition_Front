const Question=(props)=>{
   
        switch(props.count){
            case 1: return(
                <div>case 1</div>
            );
            case 2: return(
                <div>case 2</div>
            );
            case 3: return(
                <div>case 3</div>
            );
            case 4: return(
                <div>case 4</div>
            );
            case 5: return(
                <div>case 5</div>
            );
            case 6: return(
                <div>case 1</div>
            );
            case 7: return(
                <div>case 1</div>
            );
            default:
                return 0;
        }
   
}
export default Question;