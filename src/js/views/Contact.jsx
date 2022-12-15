import React, { Component, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Insignia = ({ name, className, onChange, setName }) => {
  useEffect(() => {
    console.log("Componente Cargado....");

    return () => {
      console.log("Componente Eliminado...");
    };
  }, []);

  return (
    <div className={"card " + className}>
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
      <div className="card-footer">
        {/* <input type="text" value={name} onChange={onChange} /> */}
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

/* class UserCard extends Component {
  state = {
    name: "John",
    lastname: "Doe",
  };

  componentDidMount() {
    console.log("Componente Cargado....");
  }

  componentWillUnmount() {
    console.log("Componente Eliminado...");
  }

  render() {
    return (
      <>
        <div className={"card " + this.props.className}>
          <div className="card-body">
            <p className="card-text">{this.props.name}</p>
            <p>{this.state.name}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.setState({
                  name: "Jane",
                });
              }}
            >
              Asignar Nombre y Apellido
            </button>
          </div>
          <div className="card-footer">
            <input type="text" value={name} onChange={onChange} />
            <input
              type="text"
              className="form-control"
              value={this.props.name}
              onChange={(e) => this.props.setName(e.target.value)}
            />
          </div>
        </div>
      </>
    );
  }
} */

export default function Contact(props) {
  const [name, setName] = useState("Luis Rodriguez");
  const [show, setShow] = useState(false);
  const [datos, setDatos] = useState({
    name: "",
    lastname: "",
    age: 0,
  });

  useEffect(() => {
    console.log("Component rendered...");
    setName("Victor Tapia");
  }, []);

  useEffect(() => {
    setShow(true);
  }, [name]);

  const handleChange = (evento) => {
    setName(evento.target.value);
  };

  return (
    <>
      <h1>Contact</h1>
      <p>{name}</p>
      {/* <input type="text" onChange={(evento) => setName(evento.target.value)} value={name} /> */}
      <input type="text" onChange={handleChange} value={name} />
      <button
        className="btn btn-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Ocultar" : "Mostrar"}
      </button>

      <div
        className="btn btn-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? <FaEyeSlash /> : <FaEye />}
      </div>
      {show && (
        <>
          <Insignia
            name={name}
            className={"w-50 mx-auto"}
            onChange={handleChange}
            setName={setName}
          />
          {/* <UserCard
            name={name}
            className={"w-50 mx-auto"}
            onChange={handleChange}
            setName={setName}
          /> */}
        </>
      )}
    </>
  );
}
