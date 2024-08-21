import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import kautilya from "../kautilya";

const Blogpage = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await kautilya.get(`/blog-lists/${slug}`);
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
  // Access data properties
  const {
    opinion,
    thumbnail_path,
    header_path,
    posted_by_path,
    title,
    posted_by,
    description,
  } = data.data;
  // console.log(data.data)
  return (
    <section>
      <Container className="inner_capstone">
        <h4>{opinion}</h4>
        <h2>{title}</h2>
        <img
          src={
            "https://guprojects.gitam.edu/kautilya-admin/public/media/" +
            header_path
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
              By,
              <br />
            </span>
            <span dangerouslySetInnerHTML={{ __html: posted_by }}></span>{" "}
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="mt-4 mb-3 image_center"
        ></div>
      </Container>
    </section>
  );
};

export default Blogpage;
