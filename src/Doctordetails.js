import React from "react";
import { Link } from "react-router-dom";

export default function Doctordetails() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" id="header">
          <div className="col-3 pt-2" id="arrow">
        <Link to={'/online-consultation'}>    <a href="">
              <i class="fa-solid fa-arrow-left"></i>
            </a></Link>
          </div>
          <div className="col-4">
            <h2>Create Appointment</h2>
          </div>
        </div>

        <div class="card rounded-4 card-bordered card-lift">
          <div class="p-3 d-flex flex-column gap-3">
            {/* <!--img--> */}
            <a href="#!" className="aback">
              <img
                src="./img/doc1.png"
                alt="mentor 1"
                class="img-fluid w-20 rounded-4"
              />
            </a>
            {/* <!--content--> */}
            <div class="d-flex flex-column gap-4">
              <div class="d-flex flex-column gap-2">
                <div>
                  <div class="d-flex align-items-center gap-2">
                    <h3 class="mb-0">
                      <a href="#!" class="text-reset">
                        Dr. Vijayakumar
                      </a>
                    </h3>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-patch-check-fill text-success"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                    </span>
                  </div>
                  <span style={{ color: "#1F2587" }} class="text-gray-800">
                    <strong>General Physician</strong>
                  </span>
                </div>

                <div class="d-flex align-items-center justify-content-between fs-6">
                  <div>
                    <span>
                      <strong>@ Online</strong>
                    </span>
                    <div class="vr mx-2 text-gray-200"></div>
                    <span>11yrs Exp.</span>
                  </div>
                  <div class="d-flex gap-1 align-items-center lh-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      class="bi bi-star-fill text-warning"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>

                    <span class="fw-bold text-dark">5.0</span>
                    <span>(12 Reviews)</span>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-between align-items-center">
                <div>
                  <span>Starting from</span>
                  <div class="d-flex flex-row gap-1 align-items-center">
                    <h4 class="mb-0">300.00</h4>
                  </div>
                </div>
                <div>
              <Link to={'/slot-booking'}>    <a
                    href="#!"
                    class="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                  >
                    Book Appointment
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="p-3 flex-col gap-3 d-flex justify-content-center">
            <span style={{ color: "#1F2587" }}><bold>Introduction</bold></span>
            <br />
          </div>
          <div className="p-2 justify-content-start">
            {" "}
            <p>
              Lorem ipsum is a placeholder text commonly used to
              <br />
              demonstrate the visual form of a document or a typeface <br />
              without relying on meaningful content.
            </p>
          </div>
        </div>

  <div className="row  gap-3">
  <div className="p-3 col-lg gap-3" id="box">
       <h4 style={{color:'#1F2587'}}>Specialization</h4>
       
        <li className="mt-5">General Physician</li>
        <li className="mt-5">Diabetology</li>
        <li className="mt-5">Family Medicine</li>
      
  </div>
  </div>

  <div class="card mb-4">
{/* <!-- Card header --> */}
<div class="card-header d-lg-flex align-items-center justify-content-between">
  <div class="mb-3 mb-lg-0">
    <h3 class="mb-0">Reviews</h3>
    <span>You have full control to manage your own account
      setting.</span>
  </div>
  <div>
    <a href="#" class="btn btn-outline-primary btn-sm">Export
      To CSV...</a>
  </div>
</div>
{/* <!-- Card body -->/ */}
<div class="card-body">
  {/* <!-- Form --> */}
  <form class="row mb-4">
    <div class="col-xl-7 col-lg-6 col-md-4 col-12 mb-2 mb-lg-0">
      <select class="form-select">
        <option value="">ALL</option>
        <option value="How to easily create a website with WordPress">
          How to easily create a website with WordPress
        </option>
        <option value="Getting started - Grunt: The JavaScript Task...">
          Getting started - Grunt: The JavaScript Task...
        </option>
        <option value="Getting started - Vue js: The JavaScript Task...">
          Getting started - Vue js: The JavaScript Task...
        </option>
      </select>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-4 col-12 mb-2 mb-lg-0">
      <select class="form-select">
        <option value="">Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-4 col-12 mb-2 mb-lg-0">
      <select class="form-select">
        <option value="">Sort</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  </form>
  {/* <!-- List group --> */}
  <ul class="list-group list-group-flush border-top">
    {/* <!-- List group item --> */}
    <li class="list-group-item px-0 py-4">
      <div class="d-flex">
        <img src="./img/doc2.png" alt=""
          class=" avatar-lg" />
        <div class="ms-3 mt-2">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <h4 class="mb-0">Eleanor Pena</h4>
              <span class=" fs-6">2
                hour ago</span>
            </div>
            <div>
              <a href="#" data-bs-toggle="tooltip" data-placement="top"
                title="Report Abuse"><i class="fe fe-flag"></i></a>
            </div>
          </div>
          <div class="mt-2">
            <span class="me-1 fs-6 align-text-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>
            <span class="me-1">for</span>
            <span class="h5">How to easily create a
              website with WordPress</span>
            <p class="mt-2">
              The course is very interesting and
              insightful. I think it should have more
              downloadable resources for 'points to
              remember' or 'key learnings' kind of
              document for later reference after
              finishing each section.
            </p>
            <a href="#" class="btn btn-outline-secondary btn-sm">Respond</a>
          </div>
        </div>
      </div>
    </li>
    {/* <!-- List group item --> */}
    <li class="list-group-item px-0 py-4">
      <div class="d-flex">
        <img src="./img/doc3.png" alt=""
          class="rounded-circle avatar-lg" />
        <div class="ms-3 mt-2">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <h4 class="mb-0">Jenny Wilson</h4>
              <span class=" fs-6">2
                hour ago</span>
            </div>
            <div>
              <a href="#" data-bs-toggle="tooltip" data-placement="top"
                title="Report Abuse"><i class="fe fe-flag"></i></a>
            </div>
          </div>
          <div class="mt-2">
            <span class="me-1 fs-6 align-text-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>
            <span class="me-1">for</span>
            <span class="h5">Getting started - Grunt:
              The JavaScript Task...</span>
            <p class="mt-2">
              Quisque semper aliquet lacinia. Ut
              molestie felis nec consectetur
              hendrerit. Aliquam eu viverra velit. In
              non leo ornare, ornare lorem elementum,
              efficitur urna. Curabitur fringilla
              nulla ac odio dignissim viverra.
            </p>
            <a href="#" class="btn btn-outline-secondary btn-sm">Respond</a>
          </div>
        </div>
      </div>
    </li>
    {/* <!-- List group item --> */}
    <li class="list-group-item px-0 py-4">
      <div class="d-flex">
        <img src="./img/doc4.png" alt=""
          class=" avatar-lg" />
        <div class="ms-3 mt-2">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <h4 class="mb-0">Brooklyn Simmons</h4>
              <span class=" fs-6">2
                hour ago</span>
            </div>
            <div>
              <a href="#" data-bs-toggle="tooltip" data-placement="top"
                title="Report Abuse"><i class="fe fe-flag"></i></a>
            </div>
          </div>
          <div class="mt-2">
            <span class="me-1 fs-6 align-text-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>
            <span class="me-1">for</span>
            <span class="h5">Getting started - Vue js:
              The JavaScript Task...</span>
            <p class="mt-2">
              Nulla eu cursus lacus. Vestibulum
              imperdiet accumsan tempor. Vivamus
              lacinia posuere augue ac mollis. Integer
              ornare purus ac hendrerit vehicula. In
              condimentum efficitur quam, sed porta
              turpis lobortis sit amet.
            </p>
            <a href="#" class="btn btn-outline-secondary btn-sm">Respond</a>
          </div>
        </div>
      </div>
    </li>
    {/* <!-- List group item --> */}
    <li class="list-group-item px-0 py-4">
      <div class="d-flex">
        <img src="./img/doc2.png" alt=""
          class=" avatar-lg" />
        <div class="ms-3 mt-2">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <h4 class="mb-0">John Deo</h4>
              <span class=" fs-6">1
                hour ago</span>
            </div>
            <div>
              <a href="#" data-bs-toggle="tooltip" data-placement="top"
                title="Report Abuse"><i class="fe fe-flag"></i></a>
            </div>
          </div>
          <div class="mt-2">
            <span class="me-1 fs-6 align-text-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-light" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>
            <span class="me-1">for</span>
            <span class="h5">Getting started - Gulp: The
              JavaScript Task...</span>
            <p class="mt-2">
              Suspendisse mauris lectus, posuere et
              quam eu, auctor interdum turpis.
              Maecenas gravida libero vitae risus
              sodales dictu llentesque tristique mi ut
              lectus luctus, eu hendrerit felis
              accumsan. Nam eget felis porttitor,
              volutpat nisi id, aliquam purus.
            </p>
            <a href="#" class="btn btn-outline-secondary btn-sm">Respond</a>
          </div>
        </div>
      </div>
    </li>
    {/* <!-- List group item --> */}
    <li class="list-group-item px-0 pt-4 pb-0">
      <div class="d-flex">
        <img src="./img/doc.png" alt=""
          class="rounded-circle avatar-lg" />
        <div class="ms-3 mt-2">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <h4 class="mb-0">Simons Xolaa</h4>
              <span class=" fs-6">3
                hour ago</span>
            </div>
            <div>
              <a href="#" data-bs-toggle="tooltip" data-placement="top"
                title="Report Abuse"><i class="fe fe-flag"></i></a>
            </div>
          </div>
          <div class="mt-2">
            <span class="me-1 fs-6 align-text-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>
            <span class="me-1">for</span>
            <span class="h5">Getting started - HTML: The
              Foundations Task...</span>
            <p class="mt-2">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed euismod nulla orci,
              sed varius metus tincidunt consequat.
              Maecenas in purus non nisi luctus
              pulvinar vitae eu lacus. Nam magna
              ipsum, fermentum in commodo ut,
              tristique ut mauris.
            </p>
            <a href="#" class="btn btn-outline-secondary btn-sm">Respond</a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
</div>

      </div>
    </>
  );
}
