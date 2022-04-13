import React from "react";
import '../Styles/PostComment.css'

function PostComment() {
  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <h2>0 Comments</h2>
          <h2 className="pt-3">Leave a comments</h2>


         <div className="col-md-12">
          <div className="mb-3 mt-3">
            <label for="exampleFormControlTextarea1" className="form-label text-muted">
             Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
         </div> 
      
      <div className="row mt-4 mb-5">
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label">Name</label>
          <input type="text" className="form-control name_input" />
          <p className="post_comment_btn text-center mt-5">POST COMMENT</p>
        </div>

        <div className="col-md-6">
           <label for="exampleInputEmail1" className="form-label">Email</label>
           <input type="email" className="form-control name_email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      </div>

        </div>
      </div>
    </>
  );
}

export default PostComment;
