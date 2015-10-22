// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    
    console.log('this in SongQueue', this)

    enqueue: function(){
      this.add()
    }
  }

});