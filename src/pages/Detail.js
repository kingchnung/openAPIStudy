import { useContext, useEffect, useState } from "react";
import { stateContext } from "../App";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../component/Header";
import BusantravelDetail from "../component/BusantravelDetail";

const Detail = () => {
    const result = useContext(stateContext);
    const {UC_SEQ} = useParams();
    const [travel, setTravel] = useState();

    useEffect(() => {
        const data = result.find((it) => String(it.UC_SEQ)===String(UC_SEQ));
        if(data) {
            setTravel(data);
        }
    },[UC_SEQ, result]);

    if(!travel) {
        return <div>여행 정보를 읽어오는 중입니다...</div>
    } else {
        return (
            <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="text-center">부산 테마 여행 상세 정보</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BusantravelDetail travel={travel} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Detail;