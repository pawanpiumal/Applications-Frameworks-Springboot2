import React, { Component } from 'react';
import './productCard.css'
import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.css';

class productCard extends Component {

    deleteProduct = () => {
        this.props.deleteProduct(this.props.id);
    }

    updateProduct = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Update Product',
            html: '<p>Name:' +
                '<input id="swal-input1" class="swal2-input">' +
                '<p>Description:' +
                '<input id="swal-input2" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ]
            }
        })
        if (formValues) {
            if (formValues[0] !== "" && formValues[1] !=="") {
                await Swal.fire({
                    title:"Updated Product",
                    text:JSON.stringify(formValues)}
                    );
                let data = {
                    id: this.props.id,
                    name: formValues[0],
                    description: formValues[1]
                };
                this.props.updateProduct(data);
            }
        }

    }

    render() {
        return (
            <div className="col-sm-4 py-2 ">
                <div className="card">
                    <div className="card-body ">
                        <div className='card-text' >
                            <p>ID          : {this.props.id}</p>
                            <p>Name        : {this.props.name}</p>
                            <p>Description : {this.props.description}</p>
                        </div>
                        <div className="btn-group taskRowButton" role="group">
                            <button className="btn btn-dark" type="button" onClick={() => this.updateProduct()}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-danger" type="button" onClick={() => this.deleteProduct()}>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default productCard;