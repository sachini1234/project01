import React, { Component } from 'react'
import logoimg from "../assets/img 3.png";

export default class Footer extends Component {
    render() {
        return (
        <footer class="flex-column pt-4 mt-4">
            <div className='d-sm-flex mx-sm-0 mx-3'>
                <div className='mx-sm-5 col-md-4 col-sm-3'>
                    <div className='me-md-5'>
                        <div className='d-flex'>
                            <div className="footer mt-xl-2 mt-md-0">
                                <img src={logoimg} alt="Logo" className="card-img mb-2 me-xl-2"/>
                            </div>
                            <div className='link logo ps-xl-3 ps-2 text-light fw-bolder'>
                                <p className='mb-md-2 mb-0'>AT DIGITAL</p>
                            </div>
                        </div>
                        <p className='text-light cont'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                    </div>
                </div>

                <div className='col-xl-2 col-md-0'></div>

                <div className='text-light col-xl-2 col-md-3 mx-md-2 mx-sm-4 px-0'>
                    <p className='link fw-bolder mb-md-2 mb-0'>Our Technologies</p>
                    <div className='cont'>
                        <p className='mb-0'>ReactJS</p>
                        <p className='mb-0'>Gatsby</p>
                        <p className='mb-0'>NextJS</p>
                        <p className='mb-0'>NodeJS</p>
                        <p className='mb-0'>GraphQL</p>
                        <p className='mb-0'>Laravel</p>
                    </div>
                </div>

                <div className='text-light col-xl-4 col-md-3 px-xl-0 flex-md-0 mt-3 mt-md-0'>
                    <p className='link fw-bolder mb-md-2 mb-0'>Our Services</p>
                    <div className='cont'>
                        <p className='mb-0'>Social media Marketing</p>
                        <p className='mb-0'>Web & Mobile App Development</p>
                        <p className='mb-0'>Data & Analytics</p>
                        <p className='mb-0'>Google Marketing solutions</p>
                        <p className='mb-0'>Search Engine Optimization</p>
                    </div>
                </div>
            </div>

            <div className='mx-sm-5 px-xxl-5 mt-3'>
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
