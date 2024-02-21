import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const Reviews = ({onAdd, reviews, getMovie, movie}) => {
    const [text, setText] = useState('');
    let params = useParams();
    const imdbId = params.imdbId;

    useEffect(() => {
        getMovie(imdbId);
    },[])
    
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd(text, imdbId)
        setText('')
    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie.poster} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Write a review?</Form.Label>
                                        <Form.Control value={text} as="textarea" rows={3} onChange={(e) => setText(e.target.value)}/>
                                    </Form.Group>
                                    <Button variant="outline-info" onClick={onSubmit}>Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    //<div>{console.log(reviews)}</div>
                    reviews?.map((r) => {
                        return (
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Col>
        </Row>
          <Row>
              <Col>
                  <hr />
              </Col>
          </Row>
    </Container>
  )
}

export default Reviews