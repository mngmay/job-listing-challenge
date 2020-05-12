import React from "react";
import SkillTag from "./SkillTag";
import ToolTag from "./ToolsTag";

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
      {job.tools.map(tool => (
        <ToolTag key={`${job.id}-${tool}`} tool={tool} />
      ))}
      {job.languages.map(lang => (
        <SkillTag key={`${job.id}-${lang}`} lang={lang} />
      ))}

      <div>
        {job.postedAt} {job.contract} {job.location}
      </div>
    </div>
  );
};

export default JobCard;
