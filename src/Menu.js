import React from "react";

const Menu = (props) => {
  const { filtered } = props;
  return (
    <>
      {filtered.map((item) => {
        return (
          <>
            <div>
              <img src={item.img} alt="" />
              <h2>{item.title}</h2>
              <h4>{item.price}</h4>
              <p>{item.desc}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Menu;
