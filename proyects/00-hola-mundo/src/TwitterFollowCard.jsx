export function TwitterFollowCard ({ userName, name, isFollowing}) {
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>

          <img className='tw-followCard-avatar'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Escudo_del_Club_Atl%C3%A9tico_Uni%C3%B3n.svg/894px-Escudo_del_Club_Atl%C3%A9tico_Uni%C3%B3n.svg.png" 
          alt="El avatar" />

          <div className='tw-followCard-info'>
            <strong>
                {name}
            </strong>
            
            <span className='tw-followCard-infoUserName'>
                @{userName}
            </span>
          </div>
        </header>
    
        <aside>
          <button className='tw-followCard-button'>
            Seguir
          </button>
        </aside>
      </article>
    )
}