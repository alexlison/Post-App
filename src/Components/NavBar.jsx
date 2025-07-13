import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav class="navbar navbar-fluid navbar-expand-lg bg-info">
              <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                  Post App
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/">
                        Add Post
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/view">
                        View Post
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/search">
                        Search Post
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/delete">
                        Delete Post
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

  );
};

export default NavBar;
