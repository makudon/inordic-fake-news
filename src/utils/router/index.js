import { createWebHistory, createRouter } from "vue-router";

// Импортируем компоненты которые будут отображаться на разных страницах
import HelloWorld from "../../components/HelloWorld.vue"
import NewsList from "../../components/NewsList.vue";

//Делаем конфигурацию, которая показывает определенный компонент при переходе по определенному пути
//Например при переходе на простой / отображает компонент HelloWorld
const routes = [
    {
        path: "/",
        name: "Home",
        component: HelloWorld
    },
    {
        path: "/news",
        name: "News",
        component: NewsList
    }
]

const router = createRouter({
    //Пока пропускаем разбор History
    history: createWebHistory(),
    //Передаем поле при создании объекта роутера наш routes
    routes: routes,
});

//export default - это экспорт объекта по умолчанию, подходит для одного элемента
export default router