import React from 'react';
import style from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import IngredientDetails from '../Modal/IngredientsDetails/IngredientsDetails';
import OrderDetails from '../Modal/OrderDetails/OrderDetails';
import getIngredients from '../Api/Api';

function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState(null);

  const handleOpenModal = (info) => {
    setModalInfo(info);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const [ingredients, setIngredients] = React.useState({
    isLoading: false,
    hasError: false,
    data: [],
  });

  React.useEffect(() => {
    getIngredients()
      .then((res) => setIngredients({ data: res.data, isLoading: false }))
      .catch((err) => {
        setIngredients({ hasError: true, isLoading: false });
      });
  }, []);

  const { data, isLoading, hasError } = ingredients;

  return (
    <div className={style.App}>
      <AppHeader />
      <main style={{ display: 'flex' }}>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка загрузки'}
        {!isLoading && !hasError && data.length && (
          <BurgerIngredients data={data} handleOpenModal={handleOpenModal} />
        )}
        {!isLoading && !hasError && data.length && (
          <BurgerConstructor data={data} onOpenModal={handleOpenModal} />
        )}
      </main>
      {modalVisible && (
        <Modal header={modalInfo.header} onClose={handleCloseModal}>
          {modalInfo.type === 'ingredient_details' && (
            <IngredientDetails ingredient={modalInfo.ingredient} />
          )}
          {modalInfo.type === 'order_details' && (
            <OrderDetails orderNumber={modalInfo.orderNumber} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
