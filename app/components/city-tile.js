import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    destroyCity(city){
      if(confirm('you deleting this?')){
        this.sendAction('destroyCity', city);
      }
    }
  }
});
