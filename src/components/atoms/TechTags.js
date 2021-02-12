import React from "react"

const TechTags = ({ tags }) => {
  return (
    <ul className={`projectTech m-0  mt-3  flex flex-wrap `}>
      {tags &&
        tags.length > 0 &&
        tags.map((tag, i) => (
          <li
            key={`${tag}-${i}`}
            className="bg-primary text-white py-0.5 px-3 mb-2  mr-2 rounded-2xl"
          >
            {tag}
          </li>
        ))}
    </ul>
  )
}

export default TechTags
