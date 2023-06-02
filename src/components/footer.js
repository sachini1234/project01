import React, { Component } from 'react'
import logoimg from "../assets/img 3.png";

export default class Footer extends Component {
    render() {
        return (
        <footer class="flex-column pt-4 mt-4">
            <div className='d-sm-flex mx-sm-0 mx-3'>
                <div className='mx-sm-5 col-md-4'>
                    <div className='me-sm-5'>
                        <div className='d-flex text-center'>
                            <div className="footer mt-2">
                                <img src={logoimg} alt="Logo" className="card-img mb-2 me-sm-2"/>
                            </div>
                            <div className='ps-3 text-light fw-bolder fs-4'>
                                <p>AT DIGITAL</p>
                            </div>
                        </div>
                        <p className='text-light'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                    </div>
                </div>

                <div className='col-sm-2'></div>

                <div className='text-light col-md-2 mx-sm-5 ps-sm-5'>
                    <p>Our Technologies</p>
                    <p>ReactJS</p>
                    <p>Gatsby</p>
                    <p>NextJS</p>
                    <p>NodeJS</p>
                    <p>GraphQL</p>
                    <p>Laravel</p>
                </div>

                <div className='text-light col-md-2'>
                    <p>Our Services</p>
                    <p>Social media Marketing</p>
                    <p>Web & Mobile App Development</p>
                    <p>Data & Analytics</p>
                    <p>Google Marketing solutions</p>
                    <p>Search Engine Optimization</p>
                </div>
            </div>

            <div className='mx-sm-5 px-xxl-5'>
                <div className='mx-xl-5 px-xl-5'>
                    <div className='mx-xxl-5 px-xxl-5'>
                        <div className='h mx-xxl-5 mx-4 px-xxl-5'></div>
                    </div>
                </div>
            </div>

            <div className='text-light text-center pt-2 pb-3'>
                <p>Privacy Policy</p>
            </div>
        </footer>
        )
    }
}
