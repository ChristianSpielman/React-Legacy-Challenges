export default function apidisplay() {
//display results from api fetch
    return(
        <div>
            <h1>{props.person.name}</h1>
            <p>Eye Color: {props.person.eye_color}</p>
            <p>Height: {props.person.height}</p>
        </div>
    )
}