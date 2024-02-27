import KedvencButton from "../../Buttons/KedvencButton";

export default function TermekLeiras(props) {

    function kattintasKezeles() {
        //console.log(props.index);
        props.kattintasKezeles(props.index);
    }

    return (
        <div className="termekLeiras col-md-5" >
            <div className="row">
                <div className="col-md-11"><h3 >Termék neve</h3></div>
                <div className="col-md-1" > <KedvencButton /></div>
            </div>
            <h5>termék latin neve</h5>
            <h5>Kiszerelés tipusa</h5>
            <h6>Temék leírása</h6>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam alias quam veniam
                laborum nulla vitae optio fuga natus aliquid dolor,
                reiciendis impedit itaque perferendis neque placeat distinctio saepe ducimus. Odio!
                Debitis quia necessitatibus iste. Repudiandae, eveniet nisi atque eligendi in quaerat
                accusantium inventore, provident quos dolores, consequuntur dolor laboriosam explicabo unde
                nihil autem perspiciatis harum non impedit pariatur aliquid! Laboriosam.</p>


        </div>
    )

}