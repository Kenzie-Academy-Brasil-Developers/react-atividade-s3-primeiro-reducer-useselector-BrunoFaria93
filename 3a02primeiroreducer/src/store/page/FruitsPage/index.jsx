//importando useSelector do react-redux
import { useSelector } from "react-redux";

const FruitsPage = () => {
	//acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className='pai' >
        <div className='container'>
                {fruits.map((fruit) => (
                    <p key={fruit}>{fruit}</p>
            ))}
        </div>
      
      <div className='imagens'>
        <img src="https://greenpng.com/wp-content/uploads/2020/06/Bananas-png.png" alt="banana" />
        <img src="https://i.pinimg.com/originals/21/ed/e7/21ede7ca31bd352e89e1720139844486.png" alt="maça" />
        <img src="https://images.vexels.com/media/users/3/141276/isolated/preview/bd914210c08f8689d5851682ae5d11fa-desenho-de-morango.png" alt="morango" />
      </div>
     
    </div>
  );
}

export default FruitsPage;