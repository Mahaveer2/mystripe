import React from 'react'

function Modal({id,title,content,button}) {
  return (
    <div>
      <input type="checkbox" id={id} class="modal-toggle" />
      <div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{title}</h3>
    <div class="py-4">{content}</div>
    <div class="modal-action">
      {button && (button)}
      <label for={id} class="btn">Close</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal