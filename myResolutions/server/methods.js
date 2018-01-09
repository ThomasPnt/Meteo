Meteor.methods({
    addResolution(resolution) {
        check(resolution, String);
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not Authorized');
        }
        Resolutions.insert({
            text: resolution,
            complete: false,
            createdAt: new Date(),
            user: Meteor.userId()
        });
    },
    toggleResolution(resolution) {
        check(resolution, Object);
        if (Meteor.userId() !== resolution.user) {
            throw new Meteor.Error('Not Authorized');
        }
        Resolutions.update(resolution._id, {
            $set: {complete: !resolution.complete}
        });
    },
    deleteResolution(resolution) {
        check(resolution, Object);
        if (Meteor.userId() !== resolution.user) {
            throw new Meteor.Error('Not Authorized');
        }
        Resolutions.remove(resolution._id);
    }
});

//Check est un package qui permet d'empecher la personne d'entré des éléments qu'on ne veux pas via la console, ici par exemple on met la methode check(la variabale qu'on veux vérifier, et ici ce qu'elle doit être) exemple au dessus.