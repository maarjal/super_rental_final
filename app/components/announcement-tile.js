import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement){
      if(confirm('Delete this announcement?')){
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
