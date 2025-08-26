import { Col, Container, Row } from "react-bootstrap";
import Header from "../component/Header";
import BusantravelList from "../component/BusantravelList";

const Home = () => {


    return (
        <Container>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-center">부산 테마여행 리스트</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BusantravelList />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;