import Component from '@ember/component';
import {allImageData} from '../internals/images-data';

export default Component.extend({
    classNames:['home-container__image-grid d__grid'],
    init(){
        this._super(...arguments);
        this.set('homePageImages', allImageData.home);
    }
});
