import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return [
    {
      price: 10,
      quantity: 2,
      orderPrice: function(){
        return this.price*this.quantity;
      }
    }
  ];
}
});
