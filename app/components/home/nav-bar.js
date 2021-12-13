import Component from '@ember/component';

export default Component.extend({
    tagName: 'nav',
    classNames: ['home-page-nav'],
    init() {
        this._super(...arguments);
        this.set('isOpen', false);
    },
});
