import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { deleteProfile, fetchProfile, editProfile } from "../store/actions/profileAction"
import Modal from "react-modal"
import Swal from "sweetalert2"

function Profile() {
  const dispatch = useDispatch()
  const { profile, loading } = useSelector((state) => state.profile)

  const [showEditForm, setShowEditForm] = useState(false)
  console.log(profile)
  useEffect(() => {
    dispatch(fetchProfile())
    // eslint-disable-next-line
  }, [])

  const [editInput, setEditInput] = useState({
    username: profile ? profile.username : "",
    password: profile ? profile.password : "",
    role: profile ? profile.role : "",
  })
  console.log(editInput)

  const handleChange = (e) => {
    let { name, value } = e.target
    const newInput = { ...editInput, [name]: value }
    setEditInput(newInput)
  }

  const handleShowEditForm = (e) => {
    e.preventDefault()
    setShowEditForm(true)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(editProfile(editInput))
  }

  const handleDelete = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: `Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteProfile(profile.id))
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Profile Is Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        })
      } else if (result.isDismissed) {
        Swal.fire("Profile Is Undeleted")
      }
    })
  }

  if (loading) return <h1>Loading</h1>

  return (
    <div className="profile-page">
      {/* Edit Modal */}
      <Modal isOpen={showEditForm} className="CustomModal shadow-lg" overlayClassName="Overlay" onRequestClose={() => setShowEditForm(false)} ariaHideApp={false}>
        <p>Sign Up</p>
        <form>
          <div className="mb-2">
            <label htmlFor="username" className="form-label label">
              Username
            </label>
            <input type="text" name="username" value={editInput.username} onChange={handleChange} className="form-control" id="username" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label label">
              Password
            </label>
            <input type="text" name="password" value={editInput.password} onChange={handleChange} className="form-control" id="password" autoComplete="none" />
          </div>
          <div>
            <label htmlFor="role" className="form-label label">
              Role
            </label>
            <select id="role" type="text" className="form-select" aria-label="Default select example" name="role" value={editInput.role} onChange={handleChange}>
              <option defaultValue>Pick Your Role</option>
              <option value="admin">Admin</option>
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

      {profile && (
        <>
          <h1>
            {profile.username} - {profile.role}
          </h1>
          <div className="buttons d-flex justify-content-between align-items-center w-50">
            <button type="button" className="btn btn-primary" onClick={handleShowEditForm}>
              Edit
            </button>
            <button type="button" className="btn btn-secondary">
              Deactive
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default withRouter(Profile)
