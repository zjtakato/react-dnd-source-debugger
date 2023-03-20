import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  const [cards, setCards] = useState([
    {
      id: 'card1',
      text: '卡片一',
    },
    { id: 'card2', text: '卡片二' },
    {
      id: 'card3',
      text: '卡片三',
    },
  ]);
  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    let cloneCards = [...cards];
    cloneCards.splice(dragIndex, 1);
    cloneCards.splice(hoverIndex, 0, dragCard);
    setCards(cloneCards);
  };
  return (
    <>
      {cards.map((card, index) => (
        <Card key={card.id} id={card.id} text={card.text} index={index} moveCard={moveCard}></Card>
      ))}
    </>
  );
}

function Card({ id, text, index, moveCard }) {
  let ref = useRef();

  let [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  let [, drop] = useDrop({
    accept: 'CARD', // 对指定类型的拖动源发生反应
    collect: () => ({}),
    hover(item, monitor) {
      console.log('?????');
      const dragIndex = item.index; // 拖拽的索引
      const hoverIndex = index; // 正在hover卡片的索引
      if (dragIndex === hoverIndex) return;
      const { top, bottom } = ref.current.getBoundingClientRect();
      const halfOfHoverHeight = (bottom - top) / 2;
      const { y } = monitor.getClientOffset();
      const hoverClientY = y - top;
      if ((dragIndex < hoverIndex && hoverClientY > halfOfHoverHeight) || (dragIndex > hoverIndex && hoverClientY < halfOfHoverHeight)) {
        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  const opacity = isDragging ? 0.1 : 1;
  drag(ref);
  drop(ref);
  return (
    <div
      ref={ref}
      style={{
        background: 'red',
        padding: 5,
        margin: 5,
        border: '1px sloid gray',
        cursor: 'move',
        opacity,
        width: '50%'
      }}
    >
      {text}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  // </React.StrictMode>
);
