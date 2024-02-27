export default function TermekLeiras(props) {

    function kattintasKezeles() {
        //console.log(props.index);
        props.kattintasKezeles(props.index);
    }

    return (
        <div className="termekLeiras col-md-6" >
            Termék leírása, neve latin elnevezés kiszerellés
        </div>
    )

}