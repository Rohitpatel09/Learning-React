const CardTitle = (props) => {
    return (
      <>
        {props.list.map((item, index) => (
          <h5 className="card-title" key={index}>
            {item}
          </h5>
        ))}
      </>
    );
  };
  
export default CardTitle;