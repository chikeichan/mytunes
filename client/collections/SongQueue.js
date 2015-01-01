// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',function(song){
      // console.log('Added '+song.get('title'));
      if(this.models.length === 1){
        this.playFirst();
      }
    });
    this.on('ended',function(){
      this.shift();
      if(this.models.length > 0){
        this.playFirst();
      }
    });
    this.on('dequeue',function(){
      this.pop();
    })
  },

  playFirst: function(){
    this.at(0).play();
  }
});
