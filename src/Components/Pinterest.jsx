import React from "react";
import "../Styles/Pinterest.css";
import { BsPinterest,BsFacebook} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";


function Pinterest() {
  return (
    <>
      <div className="comtainer pinter_containr">
        <div className="row bg-dange">
          <div className="col-md-8 pinter_row_1st mx-auto mb-5 mt-5 ">
            <div className="row">
              <div className="col-md-6 pinterest_box">
               <div className="pinterest_img"></div>
              </div>

              <div className="col-md-6">
                <p className="text-center print_logo"><BsPinterest/></p>
                <h2 className="text-center pt-3">Sign in to save this Pin!</h2>

                <div className="row">
                  <div className="col-md-8 mx-auto pt-3">
                    <div class="mb-2 print_input_box">
                      <input
                        type="email"
                        className="form-control pinterest_input "
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mb-3 print_input_box">
                      <input
                        type="password"
                        className="form-control  pinterest_input"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                      <p className="print_forget_p_tag">Forgot your password?</p>
                    </div>
                        
                        <p className="text-center print_login">Log in</p>
                        <p className="text-center print_or">OR</p>
                        <p className="print_facebook "><BsFacebook className="ms-3 fs-4 me-2"/>Continue with Facebook</p>
                        <p className="print_google "><FcGoogle className="ms-3 fs-4 me-2"/>Continue with Google</p>
                        <p className="by_continue text-center text-muted">By continuing, you agree to Pinterest's <br/><span className="text-dark fw-bold">Terms of Service</span> and acknowledge you've read our <br/><span className="text-dark fw-bold">Privacy Policy </span></p>
                        <hr className="mt-4 text-muted mb-"/>
                        <p className="text-center  not_on_pinterest">Not on Pinterest yet? Sign up</p>
                        <p className="text-center  not_on_pinterest mb-4">Are you a business? Get started here!</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pinterest;
