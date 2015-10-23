// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  //this = Song instance 



  //All types of song behaviors (events)
  //stored inside song instances
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    // debugger;
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }

});
