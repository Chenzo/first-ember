import DS from 'ember-data';

export default DS.Model.extend({
    videoName: DS.attr(),
    videoURL: DS.attr(),
    videoType: DS.attr()
});
