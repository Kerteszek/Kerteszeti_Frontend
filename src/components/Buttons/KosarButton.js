import Button from 'react-bootstrap/Button';

export default function KosarButton({ onAddToCart }) {
    const handleClick = () => {
        onAddToCart();
    };

    return (
        <Button className='float-right megnezGomb' variant="primary" onClick={handleClick}>
            Kosárba
        </Button>
    );
}