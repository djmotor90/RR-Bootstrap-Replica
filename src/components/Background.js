import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Background() {
    return (
        <div style={{ position: "relative", width: "100%", minHeight: "268px", overflow: "hidden", backgroundColor: "#DEEED6" }}>
            <Card style={{
                width: "100%",
                minHeight: "228px",
                backgroundColor: "#DEEED6",
                border: "none",
                boxShadow: "none"
            }} className="text-black">
                <div style={{
                    top: "auto",
                    maxWidth: "578px",
                    marginLeft: "100px",
                    marginBottom: "50px",
                    marginTop: "35px",
                }}>
                    <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                        Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1em" }}>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                </div>
            </Card>
            <img style={{
                width: "auto",
                position: "absolute",
                top: "0px",
                right: "-25px",
            }} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="Card image" />
        </div>
    );
}

export default Background;
