import '../webshop/TermekOldal.css';
export default function Kep(props) {

    /*  function kattintasKezeles() {
         
         props.kattintasKezeles(props.index);
         onClick={kattintasKezeles}
     } */

    return (        
            <img className='TermekKep' src={props.src} alt={props.termek_id} />       
    )

}