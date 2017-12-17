import React, { Component } from "react"
// why doesn't this hppen at App.js only? 
// Why repeat it on every page?
import PropTypeDefinitions from "prop-types"
class Pizza extends Component {
    // what the hell is an orderCount doing in a data object?
    data = {
        orderCount: 0
    }
    render() {
        //let orderCount = 0
        ///////////////
        //////
        // how does any className relate to a css class, are they
        // specific to React?
        return (
            <div>
                <header>
                  PIZZA NAME - this.props.pizzaName:   {this.props.pizzaName}
                  


{/*                       <AppBar />
                      <Toolbar /> */}
                    <button className="order-button" onClick={(e) => {
                        //  console.log("props is = " + this.props)
                        //  console.log(this.props.specialMessage)
                        
                        console.log("console e =", e)
                        console.log("console target =", e.target)
                 
                        this.data.orderCount++
                        console.log(this.data.orderCount)
            
            
                        this.setState(() => {
                            return {
                                orderCount: this.data.orderCount
                            }
                        })
                    }}>
                        Order
                    </button>

                    <p>Order Count = {this.data.orderCount}</p>
                    <p>Thumbs Up Count = {this.props.thumbsUpCount}</p> 

                </header>
                Ingredients
                ---- {this.value}
                <select name="toppings" onSelect="{this.value}">
                    <option value="olives">Olives</option>
                    <option value="olives">Pineapple</option>
                    <option value="olives">Jalepenos</option>
                    <option value="olives">REAL Bacon</option>
                    <option value="olives">Definitely extra cheese</option>
                </select>
                <div>
                    PRICE: = {this.props.price}
                    PIZZA NAME - this.props.pizzaName:   {this.props.pizzaName}
                </div>
            </div>
        )
    }
}
// ask about Functional vs. OOP 
// ask about isRequired - what happens if the
Pizza.propTypes = {
    pizzaName: PropTypeDefinitions.string.isRequired,
    price: PropTypeDefinitions.number.isRequired,
    rating: PropTypeDefinitions.number,
    thumbsUpCount: PropTypeDefinitions.number
}
// object Pizza? where are we exporting it to? Does there have
export default Pizza