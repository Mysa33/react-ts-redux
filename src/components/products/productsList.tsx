import * as React from 'react';

class ProductsList extends React.Component {

    constructor(props:any) {
        
        super(props);
        this.state = {
            data: [],
            cart : [],
            total:0
        };
        this.addTocart = this.addTocart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    
    }

    public addTocart(item:object, data:Array<object>, cart:Array<object>):any{
        return;
    }

    public removeFromCart(item:object, data:Array<object>, cart:Array<any>):any{
        return;
    }

    public updateTotal(total:number, cart:Array<object>):number{
        
        const reducer:any = (a:number, b:number) => a + b;
        let priceArray:Array<number> = [];
        for(let i in cart){
            priceArray.push(parseFloat(cart[i][9]));
        }
        if(cart.length>0){
            this.setState({
                total: priceArray.reduce(reducer).toFixed(2)
            });
        }else{
            this.setState({
                total: 0
            });
        }
        return total;
    }

    componentDidMount() {

        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(function(result) {
            return result.clone().json();
        })
        .then(result => this.setState({data: result, isFetching: false}))
        .catch(e => console.log(e));
        
    }

    public render(){

        var items:any = this.state;
        if(items.data.length){
            console.log("items data:", items.data);
            console.log("items cart:", items.cart);
        }
        return(<div>Hello world</div>)
    }


}


export default ProductsList;