import React, { Component } from "react";
import Paginator from "./Paginator";
import UserList from "./UserList";
import UserFilter from "./UserFilter";

import allUsers from "../../data/users";

class Users extends Component {
  itemsPerPage = 5;
  totalPages = 5;

  state = {
    actualPage: 0,
    totalUsers: 0,
    users: [],
    filters: {
      gender: {
        male: false,
        female: false,
        neutral: false,
        ratherNotSay: false
      },
      role: {
        guest: false,
        user: false,
        admin: false,
        superAdmin: false
      },
      age: {
        min: null,
        max: null
      }
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const initSlice = this.itemsPerPage * this.state.actualPage;
    const endSlice = initSlice + this.itemsPerPage;
    let users = allUsers;
    const { filters } = this.state;
    //filter by gender
    if (Object.values(filters.gender).some(item => item)) {
      let genders = Object.keys(filters.gender).filter(
        gender => filters.gender[gender] === true
      );
      users = users.filter(user => genders.includes(user.gender));
    }
    //filter by role
    if (Object.values(filters.role).some(item => item)) {
      let roles = Object.keys(filters.role).filter(
        role => filters.role[role] === true
      );
      users = users.filter(user => roles.includes(user.role));
    }
    //filter by age
    if (filters.age.min || filters.age.max) {
      if (filters.age.min) {
        users = users.filter(user => user.age >= filters.age.min);
      }
      if (filters.age.max) {
        users = users.filter(user => user.age <= filters.age.max);
      }
    }
    this.setState(state => ({
      users: users.slice(initSlice, endSlice),
      totalUsers: users.length
    }));
  };

  onPageChange = newPage => {
    this.setState(
      {
        actualPage: newPage
      },
      () => {
        this.fetchUsers();
      }
    );
  };

  onUserFilter = (filter, name, value) => {
    this.setState(
      state => ({
        actualPage: 0,
        filters: {
          ...state.filters,
          [filter]: {
            ...state.filters[filter],
            [name]: value
          }
        }
      }),
      () => {
        this.fetchUsers();
      }
    );
  };

  render() {
    const { users, actualPage, totalUsers } = this.state;
    return (
      <div className="container-fluid">
        <div className="paginator">
          <Paginator
            itemsPerPage={this.itemsPerPage}
            totalItems={totalUsers}
            actualPage={actualPage}
            onPageChange={this.onPageChange}
          />
        </div>
        <div className="row">
          <div className="col-sm">
            <UserList users={users} />
          </div>
          <div className="col-sm">
            <UserFilter onUserFilter={this.onUserFilter} />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
