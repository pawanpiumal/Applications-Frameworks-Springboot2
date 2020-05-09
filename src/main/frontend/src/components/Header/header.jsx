import React, { Component } from 'react';
import './header.css';
import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.css';

class header extends Component {
    addProductSwal = () => {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            'Input ID',
            'Input Name',
            'Input Description'
        ]).then(async (result) => {
            if (result.value) {
                if (result.value[0] && result.value[1]) {

                    const answers = JSON.stringify(result.value)
                    await Swal.fire({
                        title: 'All done!',
                        html: `
                  Product Details:
                  <pre><code><p class="nav-link">${answers}</p></code></pre>
                `,
                        confirmButtonText: 'Done!'
                    });
                    this.props.addProduct(result.value);
                }
            } else {
                await Swal.fire({
                    title: 'Input Error!',
                    html: `
              Enter Id and Name
            `,
                    confirmButtonText: 'OK!'
                });
            }
        })
    }

    render() {
        return (
            <div>
                <nav id="header-nav-bar" className="navbar ">
                    <h1 className="navbar-title">Products</h1>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <p className="nav-link" onClick={() => this.addProductSwal()}>Add Product</p>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default header;