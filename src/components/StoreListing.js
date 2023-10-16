import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StoreListings() {
    return (
        <div>
            <h2 style={{textAlign: "center"}}>Choose your store in Chicago</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{  display: "flex", justifyContent: "space-evenly" }}>
                    <Col sm={true}>
                        <Image style={{ height: "70px", width: "70px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                    <Col sm={true}>
                        <Image style={{ height: "70px", width: "70px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/176x176/www.instacart.com/assets/domains/warehouse/logo/10/3bbb2bb4-f942-415d-a696-f4d170acaa4c.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>Jewel-Osco</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                    <Col sm={true}>
                        <Image style={{ height: "70px", width: "70px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/176x176/www.instacart.com/assets/domains/warehouse/logo/152/6786ead3-d45c-4614-a32d-35766143ada1.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>Binny's Beverage Depot</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
                <Row style={{ paddingTop: "40px", borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
                    <Col sm={true}>
                        <Image style={{ height: "70px", width: "70px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                    <Col sm={true}>
                        <Image style={{ height: "70px", width: "70px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/176x176/www.instacart.com/assets/domains/warehouse/logo/10/3bbb2bb4-f942-415d-a696-f4d170acaa4c.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>Jewel-Osco</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                    <Col sm={true}>
                        <Image style={{ height: "70px", width: "70px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/176x176/www.instacart.com/assets/domains/warehouse/logo/152/6786ead3-d45c-4614-a32d-35766143ada1.png" roundedCircle />
                        <h5 style={{ fontWeight: "bold" }}>Binny's Beverage Depot</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StoreListings;
