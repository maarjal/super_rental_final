import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(rental){
      if(confirm('you deleting this?')){
        this.sendAction('destroyRental',rental);
      }
    }
  }
});
