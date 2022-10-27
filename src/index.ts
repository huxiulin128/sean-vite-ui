
import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from './entry'
// import SButton from "./button";
// import SFCButton from "./SFCButton.vue"
// import JSXButton from "./JSXButton"

// createApp(JSXButton).mount("#app");
createApp({
    template: `
    <div>
        <SButton color="blue" icon="search">蓝色按钮</SButton>
    </div>
    `
}).use(SmartyUI)
    .mount("#app");