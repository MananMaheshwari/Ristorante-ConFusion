import React from 'react'
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


function DishDetails(props) {
    
    function renderComments(dish){
        return(
            <div>
                {
                    dish.comments.map((comment) => {
                        return(
                            <div key={comment.id}>
                                {comment.comment}
                                <p>~~ {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </div>
                        )
                    })
                }
            </div>
            
        )
    }
    
        if(props.dish!=null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={props.dish.image} alt={props.dish.name} />
                                <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-5 m-1">
                            {renderComments(props.dish)}
                            {console.log("render comments activated")}
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div> </div>
            )
        }
}

export default DishDetails
