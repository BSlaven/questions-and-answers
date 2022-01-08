import EditElement from './EditElement';


const ProfileModal = () => {
  return (
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Change Your Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <EditElement />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
