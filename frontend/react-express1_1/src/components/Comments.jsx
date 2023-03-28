

const Comments = (props) => {
    return ( 
        <div className="flex justify-center mb-10">
        <div>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.email}</p>
            <p>{props.message}</p>
        </div>
        </div>
     );
}
 
export default Comments;