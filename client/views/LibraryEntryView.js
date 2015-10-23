// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({
  //displays rows in table
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function(song) {
      // console.log('song -->', song)
      // console.log('clicked song')
      this.model.enqueue(song);
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
    console.log("this.model.attributes\n",this.model.attributes)
  //rendering the format of each SongModel to the template
  }

});
