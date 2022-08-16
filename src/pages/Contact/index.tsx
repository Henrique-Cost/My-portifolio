import react from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo, PinterestLogo, SnapchatLogo, TwitterLogo } from 'phosphor-react';

export default function Contact() {

    return (
        <div className='h-[600px] font-mono'>
            <h1 className='text-center text-4xl pb-20'>Send your message!</h1>
            <form className="row g-3 needs-validation mx-5" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Write the message:  </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">Workspace</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Backend</option>
                        <option>front-end</option>
                        <option>front-end</option>
                    </select>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary bg-blue-600 hover:bg-white hover:text-blue-600" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    )

}