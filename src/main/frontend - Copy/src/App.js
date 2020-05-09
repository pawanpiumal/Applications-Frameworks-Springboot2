import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/header';
import Main from './components/main';
import './App.css';
import Axios from 'axios';
import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }



    addProduct = (product) => {
        if (product) {
            let data = {
                id: product[0],
                name: product[1],
                description: product[2]
            }
            const url = "sliit/products/";
            Axios.post(url, data).then(res => {
                Swal.fire({
                    title: "Success",
                    icon: "success",
                    text: res.data
                });
                this.refreshState();
            }).catch(err => {
                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err,
                        timer: 2000
                    });
                }
            });
        }
    }

    deleteProduct = (id) => {

        let deleteurl = "sliit/products/" + id;
        Axios.delete(deleteurl).then(res => {
            Swal.fire({
                title: "Success",
                icon: "success",
                text: res.data
            });
            this.refreshState();
        }).catch(err => {
            if (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                    timer: 2000
                });
            }
        });
    }

    refreshState = () => {
        const url = "sliit/products/";
        Axios.get(url).then((res) => {
            if (res.data) {
                this.setState({ products: res.data });
            }
        }).catch(err => {
            if (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                    timer: 2000
                });
            }
        });
    }

    updateProduct = (product) => {
        const url = "sliit/products/";
        Axios.put(url, product).then(res => {
            Swal.fire({
                title: "Success",
                icon: "success",
                text: res.data
            });
            this.refreshState();
        }).catch(err => {
            if (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                    timer: 2000
                });
            }
        });
    }

    componentDidMount = () => {
        this.refreshState();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Fragment>
                        <Header addProduct={this.addProduct} />
                        <Route exact path="/"
                            render={(props) => <Main deleteProduct={this.deleteProduct} products={this.state.products} updateProduct={this.updateProduct} />} />
                    </Fragment>
                </Switch>
            </Router>

        );
    }
}
export default App;