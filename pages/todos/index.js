import Head from 'next/head'
import TodoCard from '../../components/TodoCard'
import styles from '../../styles/Home.module.css'
import stylesnavcontainer from '../../styles/NavContainer.module.css'
import Link from 'next/link'
import styleslogo from '../../styles/Logo.module.css'
import stylesham from '../../styles/Hamburger.module.css'
import stylesmenu from '../../styles/Menu.module.css'
import { useEffect } from 'react'

export default function Mytodos() {
    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (token == "undefined") {
            window.location.assign('/')
        } else {}
    }, [])

    return(
        <div className={styles.container}>
            <Head>
                <title>Todos</title>
            </Head>
            <div id={stylesnavcontainer.navcontainer}>
                <div>
                    <Link href="/">
                        <a id={styleslogo.logotext}>myTodo</a>
                    </Link>
                </div>
                <ul id={stylesmenu.menu}>

                    <Link href="/createtodo">
                        <a><li>Create Todo</li></a>
                    </Link>
                    
                    <Link href="/todos">
                        <a><li>My Todos</li></a>
                    </Link>

                    <Link href="/" replace>
                        <a><li>Sign Out</li></a>
                    </Link>
                    
                </ul>
                <div id={stylesham.hamburger}>
                    &#9776;
                </div>
            </div>
            

            <main className={styles.maintodo}>

                <TodoCard />
                
            </main>
        
        </div>
    )
}