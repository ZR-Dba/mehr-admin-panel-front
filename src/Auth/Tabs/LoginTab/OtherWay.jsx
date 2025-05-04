import React from "react";
import { Link } from "react-router-dom";
import { H6, P , Btn} from "../../../AbstractElements";

const OtherWay = () => {
	return (
		<>
			<div className="d-flex align-items-center my-4">
				<div className="flex-grow-1 border-top"></div>
				<P attrPara={{ className: "px-3 mb-0 fw-bold text-muted" }}>
					<Link
						style={{color:"#000"}}
						to={`${process.env.PUBLIC_URL}/pages/authentication/register-simple`}
					>
						ایجاد حساب کاربری
					</Link>
				</P>
				<div className="flex-grow-1 border-top"></div>
			</div>

			{/* <div className='social my-4 '>
        <div className='btn-showcase'>
          <a className='btn btn-light' href='https://www.linkedin.com/login' rel='noreferrer' target='_blank'>
            <Linkedin className='txt-linkedin' /> LinkedIn
          </a>
          <a className='btn btn-light' href='https://twitter.com/login?lang=en' rel='noreferrer' target='_blank'>
            <Twitter className='txt-twitter' />
            twitter
          </a>
          <a className='btn btn-light' href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
            <Facebook className='txt-fb' />
            facebook
          </a>
        </div>
      </div> */}
			<P attrPara={{ className: "text-center my-4" }}>
				<Link
					className="ms-2 fw-bold"
					to={`${process.env.PUBLIC_URL}/pages/authentication/register-simple`}
				>
					ساخت حساب جديد
				</Link>
			</P>

			{/* <Btn
				attrBtn={{
					color: "primary",
					className: "d-block w-100 my-5",
					onClick: ()=>{}
				}}
			>
				ایجل=اد 
			</Btn> */}
		</>
	);
};

export default OtherWay;
