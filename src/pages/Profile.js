import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, withRouter } from "react-router-dom"
import { deleteProfile, fetchProfile } from "../store/actions/profileAction"
import Swal from "sweetalert2"
import EditForm from "../components/EditForm"

function Profile() {
  const history = useHistory()
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const { profile, loading } = useSelector((state) => state.profile)
  const [showEditForm, setShowEditForm] = useState(false)

  useEffect(() => {
    dispatch(fetchProfile(token))
    // eslint-disable-next-line
  }, [token])

  const handleShowEditForm = (e) => {
    e.preventDefault()
    setShowEditForm(true)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Do you want to delete this data?",
      showCancelButton: true,
      confirmButtonText: `Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteProfile(token, profile.id))
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile Is Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        })
        setTimeout(() => {
          history.push("/auth")
        }, 500)
      } else if (result.isDismissed) {
        Swal.fire("Profile Is Undeleted")
      }
    })
  }

  if (loading) return <h1>Loading</h1>

  return (
    <div className="profile-page">
      {showEditForm && <EditForm isOpen={showEditForm} profile={profile} setShowEditForm={setShowEditForm} />}

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
            {profile.role === "admin" && (
              <button type="button" className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default withRouter(Profile)
