import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";

const Issue_briefBackup = () => {
  const location = useLocation();
  const { data } = location.state || {};

  // Check if data is available
  if (!data) {
    // Handle the case when data is not available
    return <div>Data not available</div>;
  }

  // Access data properties
  const {
    title,
    posted_by,
    posted_by_path,
    description,
    thumbnail_path,
    download,
    document,
  } = data;

  return (
    <section>
      <Container className="inner_capstone">
        <h4>ISSUE BRIEF</h4>
        <h2>{title}</h2>
        <img
          src={
            "https://guprojects.gitam.edu/kautilya-admin/public/media/" +
            thumbnail_path
          }
          className="mt-4 mb-4"
          alt={title}
        />
        <div className="d-flex">
          <img
            src={
              "https://guprojects.gitam.edu/kautilya-admin/public/media/" +
              posted_by_path
            }
            className="user_img"
            alt={title}
          />
          <p className="user_text">
            <span>
              ISSUE BRIEF by,
              <br />
            </span>
            <span dangerouslySetInnerHTML={{ __html: posted_by }}></span>{" "}
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="mt-4 mb-3"
        ></div>

        <a
          href={
            "https://guprojects.gitam.edu/kautilya-admin/public/issuebrief/" +
            document
          }
          download={download}
        >
          <strong>
            DOWNLOAD THESIS{" "}
            <i className="fa fa-download" aria-hidden="true"></i>
          </strong>
        </a>
      </Container>
    </section>
  );
};

export default Issue_briefBackup;
