import Vue from 'vue'
import { Component } from 'vue-property-decorator'

// The @Component decorator indicates the class is a Vue component
@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html')
    }
})
export default class AppComponent extends Vue {
    // Initial data can be declared as instance properties
    message: string = 'Hello!';
    drawer: boolean = true;
    source: string = 'https://www.ersnet.org';

    //data() {
    //    return {
    //        drawer: null
    //    }
    //};
    //props: {
    //    source: String
    //}

    // Component methods can be declared as instance methods
    doSomething(): void {
        window.alert(this.message)
    }
}
