import LogoIcon from './assets/stair.svg?react'
import './styles.css'
import { CardList } from './ui/Card/ListCards'
import {useCardQuery} from './assets/api/useContent'
import {RestaurantsContext } from './Context'
import { useMutation } from '@tanstack/react-query'
import { updateRestaurantRaiting } from './assets/api/api'
import { queryClient } from './assets/api/queryClient'


function App() {
  
  const raitingMutation = useMutation({
    mutationFn: updateRestaurantRaiting,
    }, queryClient) 

    const onStarClick = (id:number, raiting:number) => {
      raitingMutation.mutate({id, raiting});
    }        
  
  const cardsQuery = useCardQuery();
  
  return (
    <>
    
      <header>
        <div className="logo">
          <LogoIcon width={16} height={16} className="logo__icon" />
          <span>Eats</span>
        </div>
        <div className="profile">
          <img alt="profile" src="/avatar.png" />
        </div>
      </header>
      <main>
        <section>
            <RestaurantsContext.Provider value={{
              data: cardsQuery.data,
              raiting: onStarClick,
              status: cardsQuery.status}}>
              <CardList/>
          </RestaurantsContext.Provider>
        </section>
      </main>
      <footer>
        <p>Privacy Policy</p>
        <p className="corporation">2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    
    </>
  )
}

export default App
