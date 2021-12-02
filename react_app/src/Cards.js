import React from "react";
import { Button, Card, CardBody, CardText, CardTitle, Fade } from 'reactstrap';
import TextForCards from "./TextForCards";

const Cards = (props) => {
    return(
        <>
            <Card key = "firstCard" className="display-3 cards">
                <CardBody>
                    <CardTitle>My Card</CardTitle>
                    <Button onClick={() => props.cardOneState()}>Button</Button>
                    <Fade in={props.fade1} className="my-2">
                        <CardText>
                            <TextForCards cardNum={1} />
                        </CardText>
                    </Fade>
                </CardBody>
            </Card>
            <Card className="display-3 cards">
                <CardBody>
                    <CardTitle>My Second Card</CardTitle>
                    <Button onClick={() => props.cardTwoState()}>Button</Button>
                    <Fade in={props.fade2} className="my-2">
                        <CardText>
                            <TextForCards cardNum={2} />
                        </CardText>
                    </Fade>
                </CardBody>
            </Card>
            <Card className="display-3 cards">
                <CardBody>
                    <CardTitle>My Third Card</CardTitle>
                    <Button onClick={() => props.cardThreeState()}>Button</Button>
                    <Fade in={props.fade3} className="my-2">
                        <CardText>
                            <TextForCards cardNum={3} />
                        </CardText>
                    </Fade>
                </CardBody>
            </Card>
            <Card className="display-3 cards">
                <CardBody>
                    <CardTitle>My Fourth Card</CardTitle>
                    <Button onClick={() => props.cardFourState()}>Button</Button>
                    <Fade in={props.fade4} className="my-2">
                        <CardText>
                            <TextForCards cardNum={4} />
                        </CardText>
                    </Fade>
                </CardBody>
            </Card>
            <Card className="display-3 cards">
                <CardBody>
                    <CardTitle>My Fifth Card</CardTitle>
                    <Button onClick={() => props.cardFiveState()}>Button</Button>
                    <Fade in={props.fade5} className="my-2">
                        <CardText>
                            <TextForCards cardNum={5} />
                        </CardText>
                    </Fade>
                </CardBody>
            </Card>
            <Card className="display-3 cards">
                <CardBody>
                    <CardTitle>My Sixth Card</CardTitle>
                    <Button onClick={() => props.cardSixState()}>Button</Button>
                    <Fade in={props.fade6} className="my-2">
                        <CardText>
                            <TextForCards cardNum={6} />
                        </CardText>
                    </Fade>
                </CardBody>
            </Card>
        </>
    )
}

export default Cards;