//1、引入router相关方法
import { createRouter, createWebHashHistory } from 'vue-router'
import AboutYou from '../components/AboutYou.vue'
import AboutMe from '../components/AboutMe.vue'
import Event from '../components/Event.vue'
/* import Home from '../components/Home.vue'
 import About from '../components/About.vue'
 import NotFound from '../components/404.vue'
 import News from '../components/News.vue'*/
//需要的时候加载,上述方法加载较慢
const Home = () =>
    import ('../components/Home.vue')
const About = () =>
    import ('../components/About.vue')
const News = () =>
    import ('../components/News.vue')
const NotFound = () =>
    import ('../components/404.vue')
    //2、创建映射关系
const routes = [{
        path: '/',
        redirect: '/home'
    }, /*路由重定向,放在最前面(推荐)或最后面，增强阅读性 */
    {
        path: '/home',
        component: Home
    }, /*路由正常匹配 */
    {
        path: '/about',
        component: About,
        children: [{ /*嵌套路由不使用斜杠*/
                path: 'aboutyou',
                component: AboutYou
            },
            {
                path: 'aboutme',
                component: AboutMe
            }
        ]
    },
    { //动态路由必须是不变的部分/nam+动态部分/:nid
        path: '/news/:nid',
        component: News
    },
    {
        path: '/event',
        component: Event
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
]


//3、创建路由对象
const router = createRouter({
    history: createWebHashHistory(), //创建默认添加#
    routes,
    /*键值名字一样，使用简写 */
});
//4、导出以便vue中使用
export default router;