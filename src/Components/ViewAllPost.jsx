import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewAllPost = () => {
  const [PostData, ChangeData] = useState([]);

  const fetchedData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        ChangeData(response.data)
      }
    ).catch()
    
  }

  useEffect(() => { fetchedData() },[] )
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <h4 className="mt-4">View All Post</h4>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {PostData.map(
                (value,index) => {
                return (
                  <div className="col clol-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="card">
                      <div class="card-header">POST</div>
                      <div class="card-body">
                        <h5 class="card-title"> {value.title}</h5>
                           <p class="card-text">id:
                          {value.id}
                        </p>
                         <p class="card-text"> UserId: 
                          {value.userId}
                         
                        </p>
                        <p class="card-text">
                          {value.body}
                        </p>
                        <a href="#" class="btn btn-primary">
                          More Details
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllPost;
