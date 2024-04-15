import React from "react";

export default function Images(props) {
  const isDefaultWord = props.keyword === props.defaultKeyword;
  if (isDefaultWord) {
    return (
      <img
        src={props.defaultImageUrl}
        className="img-fluid rounded-pill border border-secondary border-3 m-2 shadow"
        width={250}
        alt="VALAGALA- a gal named val"
      />
    );
  } else {
    console.log(props.images);
    return (
      <div className="Images">
        <section>
          {props.images.map(function (image, index) {
            return (
              <img
                className="img-fluid mt-1 mb-2"
                src={image.src.landscape}
                key={index}
                alt={`Image ${index + 1}`}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
