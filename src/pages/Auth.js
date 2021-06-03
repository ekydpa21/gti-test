import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { Link, withRouter } from "react-router-dom"
import { signIn, signUp } from "../store/actions/authAction"
import Modal from "react-modal"

function Auth() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [inputSignIn, setInputSignIn] = useState({
    username: "",
    password: "",
  })
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [inputSignUp, setInputSignUp] = useState({
    username: "",
    password: "",
    role: "",
  })
  const handleChangeSignIn = (e) => {
    let { name, value } = e.target
    const newInput = { ...inputSignIn, [name]: value }
    setInputSignIn(newInput)
  }

  const handleChangeSignUp = (e) => {
    let { name, value } = e.target
    const newInput = { ...inputSignUp, [name]: value }
    setInputSignUp(newInput)
  }

  const showSignInForm = async (e) => {
    e.preventDefault()
    setShowSignInModal(true)
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    dispatch(signIn(inputSignIn))
    setTimeout(() => {
      history.push("/profile")
    }, 1000)
    setInputSignIn({
      username: "",
      password: "",
    })
    setShowSignInModal(false)
  }

  const showSignUpForm = async (e) => {
    e.preventDefault()
    setShowSignUpModal(true)
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    if (inputSignUp.role === "admin" || inputSignUp.role === "user") {
      dispatch(signUp(inputSignUp))
      setInputSignUp({
        username: "",
        password: "",
        role: "",
      })
      setShowSignUpModal(false)
      setTimeout(() => {
        history.push("/profile")
      }, 1000)
    }
  }

  return (
    <div className="auth container">
      {/* Sign In Modal */}
      <Modal isOpen={showSignInModal} className="CustomModal shadow-lg" overlayClassName="Overlay" onRequestClose={() => setShowSignInModal(false)} ariaHideApp={false}>
        <p>Sign In</p>
        <form>
          <div style={{ marginBottom: "8px" }}>
            <label htmlFor="username" className="form-label label">
              Username
            </label>
            <input type="text" name="username" value={inputSignIn.username} onChange={handleChangeSignIn} className="form-control" id="username" />
          </div>
          <div>
            <label htmlFor="password" className="form-label label">
              Password
            </label>
            <input type="password" name="password" value={inputSignIn.password} onChange={handleChangeSignIn} className="form-control" id="password" autoComplete="none" />
          </div>
        </form>
        <div className="footer">
          <button type="button" className="btn btn-secondary" onClick={() => setShowSignInModal(false)}>
            Cancel
          </button>
          <Link to={{ pathname: "/profile" }} type="button" className="btn btn-primary ms-2" onClick={handleSignIn}>
            Sign In
          </Link>
        </div>
      </Modal>

      {/* Sign Up Modal */}
      <Modal isOpen={showSignUpModal} className="CustomModal shadow-lg" overlayClassName="Overlay" onRequestClose={() => setShowSignUpModal(false)} ariaHideApp={false}>
        <p>Sign Up</p>
        <form>
          <div className="mb-2">
            <label htmlFor="username" className="form-label label">
              Username
            </label>
            <input type="text" name="username" value={inputSignUp.username} onChange={handleChangeSignUp} className="form-control" id="username" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label label">
              Password
            </label>
            <input type="password" name="password" value={inputSignUp.password} onChange={handleChangeSignUp} className="form-control" id="password" autoComplete="none" />
          </div>
          <div>
            <label htmlFor="role" className="form-label label">
              Role
            </label>
            <select id="role" type="text" className="form-select" aria-label="Default select example" name="role" value={inputSignUp.role} onChange={handleChangeSignUp}>
              <option defaultValue>Pick Your Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
        </form>
        <div className="footer">
          <button type="button" className="btn btn-secondary" onClick={() => setShowSignUpModal(false)}>
            Cancel
          </button>
          <Link to={{ pathname: "/profile" }} type="button" className="btn btn-primary ms-2" onClick={handleSignUp}>
            Sign Up
          </Link>
        </div>
      </Modal>

      <div className="card shadow-lg" style={{ width: "26rem", height: "15rem" }}>
        <div className="card-body">
          <h6 className="mb-1">Click this button bellow if you have an account</h6>
          <button type="button" className="btn btn-primary mb-3" onClick={showSignInForm}>
            Sign In
          </button>
          <h5 style={{ marginBottom: 0 }}>Or</h5>
          <button type="button" className="btn btn-primary mt-3" onClick={showSignUpForm}>
            Sign Up
          </button>
          <h6 className="mt-1 mb-0">Click this button above if you don't have an account</h6>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Auth)
