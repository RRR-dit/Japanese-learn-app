import './assets/main.css'
// viteがファイルをjavaScriptのファイルに変換してからインポートされている
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// あだ名付け
const app = createApp(App)
// 引数に指定されたコンポーネントを基にしてvue.jsのメインの機能である
// ユーザーインターフェースを作る処理
createApp(App)
app.use(router)
// インターフェースを表示
// 引数でｃｓｓセレクトと同じルールでしてする必要有
app.mount('#app')
