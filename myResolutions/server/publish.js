Resolutions = new Mongo.Collection("resolutions");

Meteor.publish("allResolutions", function(){
    return Resolutions.find()
});

Meteor.publish("userResolutions", function(){
    return Resolutions.find({user: this.userId})
});

//On utilise partout Meteor.userId sauf dans le publish ou on ne doit pas utilisé le Meteor mais le remplacer par le this qu'on connait déja.