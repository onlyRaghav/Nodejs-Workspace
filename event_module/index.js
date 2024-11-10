const Eventemitter = require("events");
const date = new Date();
const myevent = new Eventemitter(); // Created an object myevent from the

// To attach an event with the event listener
const listener=(arg) => {
    console.log(`An event just occured at ${arg}`);
  }
myevent.on("saved", listener);

// To emit an event with arguments
myevent.emit("saved", date.toLocaleTimeString());

// To detach an event
myevent.off("saved",listener);

//no effect
myevent.emit("saved","right now");

//Creating a custom class by extending the Eventemiiter
class Apple extends Eventemitter {
  constructor(id, price) {
    super();
    this._id = id;
    this._price = price;
  }
  set price(new_price) {
    if (new_price !== this._price) {
      this.emit("PriceChanged", {
        id: this._id,
        oldPrice: this._price,
        newPrice: new_price,
        adjustment: (((new_price - this._price) * 100) / this._price).toFixed(
          2
        ),
      });
    }
  }
  get price(){
    return this._price;
  }
  get id(){
    return this._id;
  }
}

const a1= new Apple(1,20);
a1.on('PriceChanged',(args)=>{
    console.log(`The price has changed to ${args.newPrice} by the adjustment of ${args.adjustment}%`)
})
a1.price=30;
