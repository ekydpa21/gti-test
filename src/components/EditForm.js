import React, { useState } from "react"
import Modal from "react-modal"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"
import { editProfile } from "../store/actions/profileAction"

export default function EditForm({ isOpen, profile, setShowEditForm }) {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const [editInput, setEditInput] = useState({
    username: profile.username,
    password: profile.password,
    role: profile.role,
  })
  const [confirmPass, setConfirmPass] = useState("")
  console.log(editInput)

  const handleChange = (e) => {
    let { name, value } = e.target
    const newInput = { ...editInput, [name]: value }
    setEditInput(newInput)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: `Update`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (editInput.password !== undefined) {
          if (editInput.password === confirmPass) {
            dispatch(editProfile(token, editInput))
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Profile Is Updated Successfully",
              showConfirmButton: false,
              timer: 1500,
            })
            setShowEditForm(false)
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Password and Confirm Password must be the same",
              showConfirmButton: false,
              timer: 1500,
            })
            setShowEditForm(false)
          }
        } else {
          dispatch(editProfile(token, editInput))
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Profile Is Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          })
          setShowEditForm(false)
        }
      } else if (result.isDismissed) {
        Swal.fire("Profile Is Unupdated")
      }
    })
  }
  return (
    <div>
      {/* Edit Modal */}
      <Modal isOpen={isOpen} className="CustomModal shadow-lg" overlayClassName="Overlay" onRequestClose={() => setShowEditForm(false)} ariaHideApp={false}>
        <p>Edit Profile</p>
        <form>
          <div className="mb-2">
            <label htmlFor="username" className="form-label label">
              Username
            </label>
            <input disabled type="text" name="username" value={editInput.username} onChange={handleChange} className="form-control" id="username" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label label">
              Password
            </label>
            <input type="password" name="password" value={editInput.password} onChange={handleChange} className="form-control" id="password" autoComplete="none" />
          </div>
          <div className="mb-2">
            <label htmlFor="confirmPassword" className="form-label label">
              Confirm Password
            </label>
            <input type="password" name="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} className="form-control" id="confirmPassword" autoComplete="none" />
          </div>
          <div>
            <label htmlFor="role" className="form-label label">
              Role
            </label>
            <select id="role" type="text" className="form-select" aria-label="Default select example" name="role" value={editInput.role} onChange={handleChange}>
              <option defaultValue>Pick Your Role</option>
              {profile.role !== "user" && <option value="admin">Admin</option>}
              <option value="user">User</option>
            </select>
          </div>
        </form>
        <div className="footer">
          <button type="button" className="btn btn-secondary" onClick={() => setShowEditForm(false)}>
            Cancel
          </button>
          <button type="button" className="btn btn-primary ms-2" onClick={handleEdit}>
            Update
          </button>
        </div>
      </Modal>
    </div>
  )
}
