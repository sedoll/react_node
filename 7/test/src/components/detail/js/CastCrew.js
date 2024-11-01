import { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "../css/CastCrew.module.css";
import movieStyles from "../css/MovieDetail.module.css";

function CastCrew({ id }) {
  const [cast, setCast] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(14);
  const url = `https://nomad-movies.nomadcoders.workers.dev/movies/${id}/credits`;

  const getCast = async () => {
    const json = await (await fetch(url)).json();
    setCast(json);
    console.log(json);
  };

  useEffect(() => {
    getCast();
    
    // 초기 slidesToShow 설정
    handleResize();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 600) {
      setSlidesToShow(3);
    } else if (width < 750) {
      setSlidesToShow(4);
    } else if (width < 900) {
      setSlidesToShow(5);
    } else if (width < 1200) {
      setSlidesToShow(6);
    } else if (width < 1400) {
      setSlidesToShow(8);
    } else if (width < 1600) {
      setSlidesToShow(10);
    } else {
      setSlidesToShow(12);
    }
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    draggable: false,
    centerPadding: "10px",
  };

  return (
    <div className={`${movieStyles.movie_info} ${styles.cast_crew}`}>
      <h3>Cast</h3>
      <Slider {...settings} style={{ margin: "0 20px" }}>
        {cast.map((member) => (
          <div
            key={member.id}
            className={`${styles.cast_member}`}
            style={{ width: "100px" }}
          >
            <img
              className={styles.cast_img}
              src={
                member.profile_path
                  ? member.profile_path
                  : "https://www.millersearles.com/wp-content/uploads/2016/10/100x150-placeholder.jpg"
              }
              alt={member.name}
              style={{ width: "100%" }}
            />
            <p>{member.known_for_department}</p>
            <p>{member.name}</p>
            <p>{member.character}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{ ...style, display: "block", background: "black" }} // Set margin here
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{ ...style, display: "block", background: "black" }} // Set margin here
      onClick={onClick}
    />
  );
};

export default CastCrew;
