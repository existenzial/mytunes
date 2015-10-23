// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
events: {
  'click': function(song){
    this.model.dequeue(song);
  }
},

  render:function(){
    return this.$el.html(this.template(this.model.attributes));
    console.log("this.model.attributes\n",this.model.attributes)
  //rendering the format of each SongModel to the template    
  }
});
