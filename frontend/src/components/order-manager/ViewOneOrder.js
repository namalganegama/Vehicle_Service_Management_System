import React, { useState, useEffect } from 'react'
import SoloAlert from 'soloalert'
import { useParams } from "react-router";
import axios from 'axios';


export default function ViewOneOrder() {

    const [isLoading, setLoading] = useState(false);

    const [textState, setTextState] = useState(true);
    const [btngrpState1, setBtnGroupstate1] = useState(true);
    const [btngrpState2, setBtnGroupstate2] = useState(false);



    const [loaderStatus, setLoaderStatus] = useState(false);
    const [tebleStatus, setTableStatus] = useState(true);



    const [dealer_name, setdealer_name] = useState("");
    const [comp_name, setcomp_name] = useState("");
    const [dealer_nic, setdealer_nic] = useState("");
    const [dealer_no, setdealer_no] = useState("");
    const [items, setitems] = useState("");
    const [quantity, setquantity] = useState("");
    const [quality, setquality] = useState("");
    const [price, setprice] = useState("");


    const { id } = useParams();

    //This useEffect function used to get all Apoinments's data
    useEffect(() => {
        async function getDetails() {
            try {
                const result = await (await axios.get(`http://localhost:5000/order/${id}`)).data.data
                setdealer_name(result[0].dealer_name);
                setcomp_name(result[0].comp_name)
                setdealer_nic(result[0].dealer_nic);
                setdealer_no(result[0].dealer_no)
                setitems(result[0].items)
                setquantity(result[0].quantity);
                setquality(result[0].quality);
                setprice(result[0].price)

                setLoaderStatus(true)
                setTableStatus(false)
                console.log(dealer_name,comp_name)
            } catch (err) {
                console.log(err.message)
            }
        }

        getDetails();
    }, [])


    async function updateData(e) {

        try {
            e.preventDefault();
            const newDetails = {
                dealer_name,comp_name,dealer_nic,dealer_no,items,quantity,quality,price
            }
            const data = await (await axios.put(`http://localhost:5000/order/${id}`, newDetails)).status
            if (data === 200) {
                SoloAlert.alert({
                    title: "Welcome!",
                    body: "Details added successfully",
                    icon: "success",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {
                        window.location = "/orderManager/view"

                    },
                });
            } else {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "Something went wrong.. plz try again later",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },
                });
            }
        } catch (err) {

        }

    }

    function edit(e) {
        e.preventDefault();
        setTextState(false)
        setBtnGroupstate1(false)
        setBtnGroupstate2(true)
    }

    function cancel(e) {
        e.preventDefault();
        setTextState(true)
        setBtnGroupstate1(true)
        setBtnGroupstate2(false)
    }


    //This function is used to delete specific Apoinment
    function deleteOrder(e) {
        e.preventDefault();

        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    const result = await (await axios.delete(`http://localhost:5000/order/${id}`)).status
                    console.log(result)

                    if (result === 200) {
                        SoloAlert.alert({
                            title: "Welcome!",
                            body: "Deletion is successful",
                            icon: "success",
                            theme: "dark",
                            useTransparency: true,
                            onOk: function () {
                                window.location = "/orderManager/view"
                            },

                        });
                    }
                } catch (err) {
                    SoloAlert.alert({
                        title: "Oops!",
                        body: "Something went wrong",
                        icon: "error",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {

                        },

                    });
                }
            },
            onCancel: function () {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "You canceled delete request",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },

                });
            },

        })
    }
    return (
        <div class="content">

            <div class="d-flex justify-content-center" >
                <div class="spinner-border" role="status" style={{ width: "10rem", height: "10rem" }} hidden={loaderStatus}>
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>


            <div hidden={tebleStatus}>
                <h3>VIEW-ORDER-DETAILS</h3><hr />
                <form class="row g-3 needs-validation" id="inputForm2" novalidate>
                <div class="col-md-6 position-relative">
                    <label for="validationTooltip01" class="form-label">DEALER NAME</label>
                    <input type="text" class="form-control" id="validationTooltip01" required defaultValue={dealer_name}
                        onChange={(e) => { setdealer_name(e.target.value) }} disabled={textState}/>
                </div>
                <div class="col-md-5 position-relative">
                    <label for="validationTooltip02" class="form-label">COMPANY NAME</label>
                    <input type="text" class="form-control" id="validationTooltip02" required defaultValue={comp_name}
                        onChange={(e) => { setcomp_name(e.target.value) }} disabled={textState}/>
                </div><br />
                <div class="col-md-5 position-relative">
                    <label for="validationTooltip03" class="form-label">DEALER NIC</label>
                    <input type="text" class="form-control" id="validationTooltip03" required defaultValue={dealer_nic}
                        onChange={(e) => { setdealer_nic(e.target.value) }} disabled={textState}/>
                </div>
                <div class="col-md-4 position-relative">
                    <label for="validationTooltip03" class="form-label">DEALER NUMBER</label>
                    <input type="text" class="form-control" id="validationTooltip03" required defaultValue={dealer_no}
                        onChange={(e) => { setdealer_no(e.target.value) }} disabled={textState}/>
                </div>
                <div class="col-md-3 position-relative">
                    <label for="validationTooltip03" class="form-label">ITEM NAME</label>
                    <input type="text" class="form-control" id="validationTooltip03" required defaultValue={items}
                        onChange={(e) => { setitems(e.target.value) }} disabled={textState}/>
                </div>
                <div class="col-md-3 position-relative">
                    <label for="validationTooltip03" class="form-label">QUANTITY</label>
                    <input type="text" class="form-control" id="validationTooltip03" required defaultValue={quantity}
                        onChange={(e) => { setquantity(e.target.value) }} disabled={textState}/>
                </div>
                <div class="col-md-3 position-relative">
                    <label for="validationTooltip03" class="form-label">QUALITY</label>
                    <input type="text" class="form-control" id="validationTooltip03" required defaultValue={quality}
                        onChange={(e) => { setquality(e.target.value) }} disabled={textState}/>
                </div>
                <div class="col-md-3 position-relative">
                    <label for="validationTooltip03" class="form-label">PRICE</label>
                    <input type="text" class="form-control" id="validationTooltip03" required defaultValue={price}
                        onChange={(e) => { setprice(e.target.value) }} disabled={textState}/>
                </div>

                <div class="col-12" id="btngrp" hidden={btngrpState1} style={{marginTop:"5%"}}>
                        <button class="btn btn-secondary"><i class="fa fa-ban" onClick={(e) => { cancel(e) }}></i> CANCEL</button>&nbsp;&nbsp;&nbsp;
                        <button type="submit" class="btn btn-primary" onClick={(e) => { updateData(e) }}
                            disabled={isLoading} ><i class="fa fa-file-export"></i>  {isLoading ? 'Updating...' : 'UPDATE'}</button>
                    </div>
                    <div class="col-12" id="btngrp" hidden={btngrpState2}  style={{marginTop:"5%"}}>
                        <button type="submit" class="btn btn-primary" onClick={(e) => { edit(e) }}> <i className="far fa-edit"></i> EDIT</button>&nbsp;&nbsp;&nbsp;
                        <button type="submit" class="btn btn-danger" onClick={(e) => { deleteOrder(e) }}><i class="fa fa-trash"></i>  DELETE</button>
                    </div>
            </form>
            </div>

        </div>
    )
}
