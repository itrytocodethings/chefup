import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";
import avatar from "../../img/avatar.png";
import "../../styles/profile.css";
import { MainHeader } from "../component/MainHeader";

//We changed up our approach so perhaps we will come back to the login page later on 3/22/22 - Jeff
export const ProfilePage = (props) => {
  const { store, actions } = useContext(Context);
  let MealsInCart = store.MealsInCart;
  let meals = store.meals;
  const history = useHistory();

  return (
    <div>
      {store.user ? (
        <div>
          <MainHeader sizeClass={"landing-header-small"} />
          <div className="container">
            <section className="main">
              <div className="user-profile">
                <div className="row">
                  <div className="col-4">
                    <div className="profile-nav p-3">
                      <div className="profile-nav-head d-flex flex-wrap  align-content-center align-items-center mb-3">
                        <div className="avatar me-3">
                          <img src={avatar} alt="" className="img-responsive" />
                        </div>
                        <h2>Hi, {store.user.username}</h2>
                      </div>
                      <div>
                        {" "}
                        <div
                          class="nav flex-column nav-pills me-3"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <button
                            class="nav-link active"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                          >
                            User Info
                          </button>
                          <button
                            class="nav-link"
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                          >
                            Favorites
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div class="tab-content" id="v-pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        User Info
                      </div>
                      <div
                        class="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        <div className="row">
                          {store.user.favorites.length > 0
                            ? store.user.favorites.map((fav) => (
                                <Card meal={fav} />
                              ))
                            : "You have no favorites"}
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                      >
                        ...
                      </div>
                      <div
                        class="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                      >
                        ...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div>not logged in</div>
      )}
    </div>
  );
};
