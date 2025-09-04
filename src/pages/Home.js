import { Col, Container, Row } from "react-bootstrap";
import Header from "../component/Header";
import BusantravelList from "../component/BusantravelList";
import BoardList from "../board/BoardList";

const Home = () => {


    return (
        // <Container>
        //     <Row>
        //         <Col>
        //             <Header />
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col>
        //             <h2 className="text-center">부산 테마여행 리스트</h2>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col>
        //             <BusantravelList />
        //         </Col>
        //     </Row>
        // </Container>
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center">게시판 리스트</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BoardList />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;