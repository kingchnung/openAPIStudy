import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router";

const Header = () => {

    const navigate = useNavigate();
    const goBusan = () => {
        navigate("/");
    };

    const goGyeongnam = () => {
        navigate('/list');
    }

    return (
        <div className="Header">
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={goBusan}>부산 테마 여행 리스트</Button>
                <Button variant="secondary" onClick={goGyeongnam}>경상남도 문화 관광 리스트</Button>
            </ButtonGroup>
        </div>
    );
};

export default Header;