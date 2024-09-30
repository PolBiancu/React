import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName = "pablo_biancu" name = "Pablo Bianculli"/>
            <TwitterFollowCard userName = "pablo_biancu" name = "Pablo Bianculli"/>
            <TwitterFollowCard userName = "pablo_biancu" name = "Pablo Bianculli"/>
        </section>
    )
}