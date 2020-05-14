import React, { useState } from "react";
import Tag from "./Tag";

const JobCard = props => {
  const { job } = props;
  const [selected, setSelected] = useState(false);

  function importAll(r) {
    const images = {};
    console.log("r", r);
    r.keys().map(img => {
      images[img.replace("./", "")] = r(img);
    });
    return images;
  }

  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  console.log(images);

  const logoKey = job.logo.slice(9);

  const selectCard = () => {
    setSelected(!selected);
    console.log("clicked", selected);
  };

  return (
    <div
      className={`card ${selected && "selected"}`}
      onClick={() => selectCard()}
    >
      <div className="left">
        <img src={images[logoKey]} alt="logo" className="logo" />
        <section className="content">
          <div className="cardHeader">
            <span className="company">{job.company}</span>
            {job.new && <span className="new">New!</span>}
            {job.featured && <span className="featured">Featured</span>}
          </div>
          <div className="position">{job.position}</div>

          <div className="bottom">
            <span>{job.postedAt}</span> <span>•</span>{" "}
            <span>{job.contract}</span> <span>•</span>{" "}
            <span>{job.location}</span>
          </div>
        </section>
      </div>
      <div className="right">
        <section className="tags">
          {/* Role i.e. Frontend */}
          <Tag key={`${job.id}-${job.role}`} tag={job.role} />

          {/* Level i.e. Senior */}
          <Tag key={`${job.id}-${job.level}`} tag={job.level} />

          {/* Languages i.e. JavaScript*/}
          {job.languages.map(lang => (
            <Tag key={`${job.id}-${lang}`} tag={lang} />
          ))}

          {/* Tools i.e. React*/}
          {job.tools.map(tool => (
            <Tag key={`${job.id}-${tool}`} tag={tool} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default JobCard;
