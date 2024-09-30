import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing = {true} userName = "leomessi" name = "Pablo Bianculli"/>
            <TwitterFollowCard isFollowing = {false} userName = "pablo_biancu" name = "Pablo Bianculli"/>
            <TwitterFollowCard userName = "pablo_biancu" name = "Pablo Bianculli"/>
        </section>
    )
}
