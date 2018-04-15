import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        //return ['Video 1', 'video 2', 'Awesome music video'];
        return Ember.$.getJSON("data/video_data.json");
    }
});
