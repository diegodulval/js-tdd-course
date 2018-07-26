import React, { Component } from "react";
import axios from "axios";

import Main from "../templates/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários"
};
const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { name: "", email: "" },
  list: []
};
export default class UserCrud extends Component {
  state = { ...initialState };

  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then(resp => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: initialState, list });
    });
  }

  getUpdatedList(user) {
    const list = this.state.list.filter(u => u.id !== user.id);
    list.unshift(user);
    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                className="form-control"
                placeholder="Digite o nome..."
                type="text"
                name="name"
                value={this.state.user.name}
                onChange={e => this.updateField(e)}
              />
            </div>
          </div>
          <div className="col-12 col-md-12">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                placeholder="Digite o email..."
                type="text"
                name="email"
                value={this.state.user.email}
                onChange={e => this.updateField(e)}
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={e => this.save(e)}>
              Salvar
            </button>
            <button
              className="btn btn-secondary ml-2"
              onClick={e => this.clear(e)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {}

  render() {
    return <Main {...headerProps}>{this.renderForm()}</Main>;
  }
}
