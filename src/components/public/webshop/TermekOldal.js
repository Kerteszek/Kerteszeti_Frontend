

export default function TermekOldal(props) {

    console.log(props.termek_id);
    
    return (
        <div className="termekOldal">
            <div>Hello World</div>
            <br />
            <div>{props.termek_id}</div>
        </div>

    )

}