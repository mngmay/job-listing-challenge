import React from "react";
import Tag from "./Tag";

const JobCard = props => {
  const { job } = props;

  function importAll(r) {
    const images = {};
    r.keys().map(img => {
      images[img.replace("./", "")] = r(img);
    });
    return images;
  }

  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  const logoKey = job.logo.slice(9);

  return (
    <div className="jobCard">
      <img src={images[logoKey]} alt="logo" />

      {job.company}
      <section className="cardTags">
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

      <div>
        {job.postedAt} {job.contract} {job.location}
      </div>
    </div>
  );
};

export default JobCard;
