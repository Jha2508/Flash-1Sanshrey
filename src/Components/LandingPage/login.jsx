import React, { useCallback, useContext, useState } from 'react'
import './login.css'
import firebase from '../../firebase'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../Auth'

const Login = ({ history }) => {
    const auth = firebase.auth()
    const store = firebase.storage()
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [rege, setrege] = useState('')
    const [regn, setregn] = useState('')
    const [regp, setregp] = useState('')
    const [regimage, setregimage] = useState('')
    const [phone, setphone] = useState('')
    const [Bio, setBio] = useState('')
    const [passoutyr, setpassoutyr] = useState('')
    const [resumelink, setresumelink] = useState('')
    const [branch, setbranch] = useState('EE')
    const [style, setstyle] = useState({ display: 'none' })
    const [regp2, setregp2] = useState('')
    const [login, setlogin] = useState(true)
    const [err, seterr] = useState('')
    const errormssgs = ['*Please Enter Your Name', '*Passwords Do not match', '*Please Try again', '*Profile Image not selected', '*Please enter any email', '*enter a valid password']
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (error) {
                alert(error);
            }
        },
        [history, email, password]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/home" />;

    }

    const handleReg = () => {
        try{
            const promise = auth.createUserWithEmailAndPassword(rege, regp)
        promise.then(cred => {

            alert('signup successful! with email :')
            var uploadtask = store.ref(`/images/${cred.user.uid}`).put(regimage)
            uploadtask.on("state_changed",
                function (snapshot) {
                    //if we want to show a loader or something it can be done her
                }, function (errr) {
                    // error handling must be done here
                }, function () {
                    store.ref(`/images/${cred.user.uid}`).getDownloadURL()
                        .then((url) => {
                            let data = {
                                bio: Bio,
                                name: regn,
                                phoneNO: phone,
                                branch: branch,
                                passingYear: passoutyr,
                                linkedinUrl: resumelink,
                                image: url,
                                uID: cred.user.uid,
                                savedPost:[]
                            }
                            console.log('data entered in reg form', data)

                            firebase.firestore().collection('Users').doc(cred.user.uid).set(data).then(() => console.log('registered'))

                        }).catch(e => alert(e.message))
                })

        })

        }catch(e){
            console.log(e.code)
        }

        
    }

    const handleRegmain = () => {


        if (regn !== '' && rege !== '' && regp !== '' && regp === regp2) {
            setstyle(false)
            seterr('')
        }
        else if (regp !== regp2) {
            setstyle(true)
            seterr(errormssgs[1])
            return
        }
        else if (regp === '') {

            setstyle(true)
            seterr(errormssgs[5])
        }
        else if (rege === '') {
            setstyle(true)
            seterr(errormssgs[4])
        }

        else if (regn === '') {

            setstyle(true)
            seterr(errormssgs[0])
        }
    }
    return (
        <>
            <div className="container landing-page-right" style={{ display: login ? "" : "none" }}>
                <h1>Login</h1>
                <p>Use your Password for login.</p>
                <hr className="ruler" />
                <div className="landing-form col-md-8">
                    <div className="input-group input-group-lg">
                        <input type="text" onChange={e => { setemail(e.target.value) }} className="form-control landing-input" placeholder="Email" value={email} />
                    </div>
                    <div className="input-group input-group-lg">
                        <input type="password" onChange={e => { setpassword(e.target.value) }} className="form-control landing-input" placeholder="Password" value={password} />
                    </div>
                    <button type="button" onClick={handleLogin} className="btn btn-lg btn-info landing-login">Login</button>
                </div>
                <p>Dont have an Account?<button type="button" className="btn btn-secondary btn-sm" onClick={() => setlogin(!login)}>Create Account</button></p>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------ */}
            <div className="container landing-page-right" style={{ display: login ? "none" : "" }}>
                <h1>Signup</h1>
                <p>Create a new Account.</p>
                <hr className="ruler" />
                <div className="landing-form col-md-8">
                    <div className="input-group input-group-md">
                        <input type="text" onChange={(e) => setregn(e.target.value)} className="form-control landing-input" placeholder="Name" />
                    </div>
                    <div className="input-group input-group-md">
                        <input type='email' onChange={(e) => setrege(e.target.value)} className="form-control landing-input" id='email' name='email' placeholder="Email" />
                    </div>
                    <div className="input-group input-group-md">
                        <input type="password" onChange={(e) => setregp(e.target.value)} className="form-control landing-input" placeholder="Password" />
                    </div>
                    <div className="input-group input-group-md">
                        <input type="password" onChange={(e) => setregp2(e.target.value)} className="form-control landing-input" placeholder="Confirm Password" />
                    </div>
                    <div style={{ display: (style ? 'block' : 'none') }} className='passcheck'>{err}</div>
                    <button type="button" className="btn btn-lg btn-info landing-login" onClick={handleRegmain} data-bs-toggle={style ? '' : 'modal'} data-bs-target="#SignUpDetails">SignUp</button>
                    <p>Already have an account? <button type="button" className="btn btn-secondary btn-sm" onClick={() => setlogin(!login)}>Login Here</button></p>

                </div>
            </div>

            {/*-----------------------------------------MODAL--------------------------------------- */}
            <div className="modal fade" id="SignUpDetails" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Details for the SignUp</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">

                            <input type="file" className='mtmb' id="img" name="img" onChange={(e) => setregimage(e.target.files[0])} accept="image/*" />
                            <input type='text' className='form-control mtmb' onChange={(e) => setpassoutyr(e.target.value)} placeholder='enter your Passing-out Year' />

                            <input type='url' className='form-control mtmb' onChange={(e) => setresumelink(e.target.value)} placeholder='enter your Linkedin Url ' />
                            <div className="input-group mb-3">
                                <div className='row'>
                                    <div className='col mtmb' style={{fontSize:'21px'}}>
                                        branch :
                                    </div>
                                    <div className='col mtmb' style={{display:'flex',flexDirection:'row'}}>
                                        <button type="button" className="btn btn-outline-secondary">{branch}</button>
                                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu ">

                                            <li className="dropdown-item" onClick={() => setbranch("EE")}>Electrical Engineering</li>
                                            <li className="dropdown-item" onClick={() => setbranch("CSE")}>Computer Science Engineering</li>
                                            <li className="dropdown-item" onClick={() => setbranch("IT")}>Information Technology</li>
                                            <li className="dropdown-item" onClick={() => setbranch("CE")}>Civil Engineering</li>
                                            <li className="dropdown-item" onClick={() => setbranch("ME")}>Mechanical Engineering</li>
                                            <li className="dropdown-item" onClick={() => setbranch("Archi")}>Architecture</li>
                                            <li className="dropdown-item" onClick={() => setbranch("IMSC")}>Integrated Sciences(IMSc)</li>
                                        </ul>
                                    </div></div>

                            </div>
                            <input type='text' className='form-control mtmb' onChange={(e) => setphone(e.target.value)} placeholder='enter your phoneNumber' />
                            <textarea id="w3review" className='form-control mtmb' onChange={(e) => setBio(e.target.value)} name="w3review" rows="4" cols="50" placeholder='enter your bio data here' />
                            <div className='errormtmb' style={{textAlign:'center',color:'red'}}> {err}</div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleReg} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
