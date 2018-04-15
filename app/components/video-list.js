import Component from '@ember/component';

export default Component.extend({
    actions: {
        showVid(vid) {
          alert(vid.url);
        }
      }
});
