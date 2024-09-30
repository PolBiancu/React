import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
    {
        name: 'Pablo Bianculli',
        userName: 'pablo_biancu',
        isFollowing: false
    },
    {
        name: 'Gabriel Eggel',
        userName: 'gabi_eggel',
        isFollowing: true
    },
    {
        name: 'Facundo Oostdyk',
        userName: 'facundotres',
        isFollowing: true
    },
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const {name, userName, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            userName = {userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
 