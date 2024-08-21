import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import kautilya from "../kautilya";

const Issue_brief = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await kautilya.get(`/issues-lists/${slug}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Data not available</div>;
  }

  const {
    title,
    posted_by,
    posted_by_path,
    description,
    thumbnail_path,
    header_path,
    download,
    document,
  } = data.data;

  return (
    <section>
      <Container className="inner_capstone">
        <h4>ISSUE BRIEF</h4>
        <h2>{title}</h2>
        <img
          src={`https://guprojects.gitam.edu/kautilya-admin/public/media/${header_path}`}
          className="mt-4 mb-4"
          alt={title}
        />
        <div className="d-flex">
          <img
            src={`https://guprojects.gitam.edu/kautilya-admin/public/media/${posted_by_path}`}
            className="user_img"
            alt={title}
          />
          <p className="user_text">
            <span>
              ISSUE BRIEF by,
              <br />
            </span>
            <span dangerouslySetInnerHTML={{ __html: posted_by }}></span>
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="mt-4 mb-3"
        ></div>

        <a
          href={`https://guprojects.gitam.edu/kautilya-admin/public/issuebrief/${document}`}
          download={download}
        >
          <strong>
            DOWNLOAD PAPER{" "}
            <i className="fa fa-download" aria-hidden="true"></i>
          </strong>
        </a>
      </Container>
    </section>
  );
};

export default Issue_brief;
