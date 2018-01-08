Resolutions = new Mongo.Collection("resolutions");

Meteor.publish("allResolutions", () => {
    return Resolutions.find()
});